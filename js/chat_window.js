/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import leftTail from '../assets/left_tail.svg';
import rightTail from '../assets/right_tail.svg';
import create from './utils/create';
import { getMessageDate, getTime } from './utils/get_date.js';
import { get } from './utils/storage';

export default class ChatWindow {
  constructor() {
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
  }

  init(messages) {
    [this.userName] = get('logged');
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
    this.footer = create('footer', 'chat_footer', this.mainChatWrapper);

    this.renderMessages(messages);
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

  addDateMessage(date) {
    const wrapper = create('div', 'msg_wrapper time_msg continue_msg', this.messagesWrapper);
    create('span', 'time_msg_text', wrapper, ['textContent', getMessageDate(date)]);
  }

  addMessage(messageObj, isFirstRender) {
    const classesObj = this.getClasses(messageObj.author);

    const date = new Date(...messageObj.time);
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
    const msgContent = create('span', 'msg_text', msgContentWrapper, ['textContent', messageObj.content]);
    const timeWrapper = create('div', 'msg_time_wrapper', msgInfo);
    const time = create('span', 'msg_time', timeWrapper, ['textContent', getTime(date)]);
    if (isFirstRender) {
      wrapper.scrollIntoView();
    } else {
      wrapper.scrollIntoView({behavior: 'smooth'});
    }
  }

  renderMessages(messages) {
    for (let i = 0; i < messages.length; i += 1) {
      this.addMessage(messages[i], true);
    }
    this.lastMsgUsername = messages[0].author;
  }
}
