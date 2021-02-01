/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import leftTail from '../assets/left_tail.svg';
import rightTail from '../assets/right_tail.svg';
import inputIcon from '../assets/input_btn.svg';
import create from './utils/create';
import NetAPI from './network_api.js';
import { getMessageDate, getTime } from './utils/get_date.js';

export default class ChatWindow {
  constructor() {
    this.chatID = null;
    this.mainChatWrapper = null;
    this.header = null;
    this.chatWrapper = null;
    this.msgsAreaWrapper = null;
    this.messagesWrapper = null;
    this.footer = null;
    this.userName = null;
    this.lastMsgUsername = null;
    this.lastMsg = null;
    this.lastDate = null;
    NetAPI.socket.on('message', (newMsg) => this.addMessage(newMsg));
  }

  addDateMessage(date) {
    const wrapper = create('div', 'msg_wrapper time_msg continue_msg', this.messagesWrapper);
    create('span', 'time_msg_text', wrapper, ['textContent', getMessageDate(date)]);
  }

  addMessageToLocalDB(messageObj) {
    global.localDB.chats.find((elem) => elem.id === this.chatID).messages.push(messageObj);
    document.body.dispatchEvent(new Event('new_message'));
  }

  addMessage = (messageObj, isFirstRender) => {
    if (messageObj.message === '') {
      document.body.dispatchEvent(new Event('new_message'));
    } else {
      const classesObj = this.getClasses(messageObj.from);
      const date = new Date(messageObj.time);
      if (!this.lastDate || date.toDateString() !== this.lastDate.toDateString()) {
        this.addDateMessage(date);
      }
      this.lastDate = date;

      const wrapper = create('div', `msg_wrapper ${classesObj.msgClass}`, this.messagesWrapper);
      const msg = create('div', `msg ${classesObj.msgClassBg} ${classesObj.sameAuthorClass}`, wrapper);
      if (!classesObj.sameAuthor) {
        const msgTail = create('img', `msg_tail ${classesObj.tailClass}`, msg);
        msgTail.setAttribute('src', classesObj.tail);
      }
      const msgInfo = create('div', 'msg_info_wrapper', msg);
      const msgContentWrapper = create('div', 'msg_content', msgInfo);
      create('span', 'msg_text', msgContentWrapper, ['textContent', messageObj.message]);
      const timeWrapper = create('div', 'msg_time_wrapper', msgInfo);
      create('span', 'msg_time', timeWrapper, ['textContent', getTime(date)]);
      if (isFirstRender) {
        wrapper.scrollIntoView();
      } else {
        wrapper.scrollIntoView({ behavior: 'smooth' });
        this.addMessageToLocalDB(messageObj);
      }
    }
  }

  createNewMessage(e) {
    e.preventDefault();
    const input = document.getElementById('msg_input');
    if (input.value) {
      const msgObj = {
        from: this.userName,
        message: input.value,
      };
      input.value = '';

      NetAPI.sendMessage(msgObj, this.chatID);
    }
  }

  getClasses(author) {
    const isMsgIncoming = author !== this.userName;
    const isMsgFromSameAuthor = author === this.lastMsgUsername;
    this.lastMsgUsername = author;
    return {
      tail: isMsgIncoming ? leftTail : rightTail,
      tailClass: isMsgIncoming ? 'left_tail' : 'right_tail',
      msgClass: isMsgIncoming ? 'incoming' : 'outgoing',
      msgClassBg: isMsgIncoming ? 'incoming_bg' : 'outgoing_bg',
      sameAuthorClass: isMsgFromSameAuthor ? 'continue_msg' : 'new_msg',
      sameAuthor: isMsgFromSameAuthor,
    };
  }

  createFooter() {
    this.footer = create('footer', 'chat_footer', this.mainChatWrapper);
    const inputWrapper = create('div', 'input_wrapper', this.footer);
    const inputForm = create('form', 'input_form', inputWrapper);
    const innerInputWrapper = create('div', 'inner_input_wrapper', inputForm);
    const input = create('input', 'msg_input', innerInputWrapper, ['id', 'msg_input']);
    const inputBtn = create('button', 'msg_input_btn', inputForm, ['id', 'msg_input_btn'],
      ['for', 'msg_input']);
    create('img', 'input_btn_img', inputBtn, ['src', inputIcon]);

    input.setAttribute('placeholder', 'Введите сообщение');

    inputBtn.addEventListener('click', (e) => this.createNewMessage(e));
  }

  renderMessages(messages) {
    for (let i = 0; i < messages.length; i += 1) {
      this.addMessage(messages[i], true);
    }
    if (!messages[messages.length - 1].from) {
      this.lastMsgUsername = messages[messages.length - 1].from;
    }
  }

  init(messagesObj, login) {
    const { messages } = messagesObj;
    this.chatID = messagesObj.ID;
    this.userName = login;
    this.lastMsgUsername = null;
    this.lastMsg = null;
    this.lastDate = null;
    this.mainChatWrapper = document.getElementById('chat_panel');
    if (this.mainChatWrapper.hasChildNodes()) {
      while (this.mainChatWrapper.firstChild) {
        this.mainChatWrapper.removeChild(this.mainChatWrapper.lastChild);
      }
    }
    this.header = create('header', 'main_header', this.mainChatWrapper);
    this.chatWrapper = create('div', 'chat_wrapper', this.mainChatWrapper);
    create('div', 'chat_bg', this.chatWrapper);
    this.msgsAreaWrapper = create('div', 'msgs_area_wrapper', this.chatWrapper);
    this.messagesWrapper = create('div', 'msgs_wrapper', this.msgsAreaWrapper);

    this.createFooter();

    this.renderMessages(messages);
  }
}
