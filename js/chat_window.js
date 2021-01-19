/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import leftTail from '../assets/left_tail.svg';
import rightTail from '../assets/right_tail.svg';
import create from './utils/create';
import getDate from './utils/get_date.js';
import { get } from './utils/storage';

export default class ChatWindow {
  constructor() {
    this.mainChatWrapper = null;
    this.header = null;
    [this.userName] = get('logged');
  }

  init(messages) {
    this.mainChatWrapper = document.getElementById('chat_panel');
    if (this.mainChatWrapper.hasChildNodes()) {
      while (this.mainChatWrapper.firstChild) {
        this.mainChatWrapper.removeChild(this.mainChatWrapper.lastChild);
      }
    }
    this.header = create('header', 'main_header', this.mainChatWrapper);
    this.chatWrapper = create('div', 'chat_wrapper', this.mainChatWrapper);
    create('div', 'chat_bg', this.chatWrapper);
    this.messagesWrapper = create('div', 'msgs_wrapper', this.chatWrapper);
    this.footer = create('footer', 'chat_footer', this.mainChatWrapper);

    this.renderMessages(messages);
  }

  renderMessages(messages) {
    for (let i = 0; i < messages.length; i += 1) {
      let tail = leftTail;
      let tailClass = 'left_tail';
      let msgClass = 'incoming';
      if (this.userName === messages[i].author) {
        tail = rightTail;
        tailClass = 'right_tail';
        msgClass = 'outgoing';
      }

      const date = new Date(...messages[i].time);
      const wrapper = create('div', 'msg_wrapper', this.messagesWrapper);
      const msg = create('div', `msg ${msgClass}`, wrapper);
      const msgTail = create('img', `msg_tail ${tailClass}`, msg);
      const msgInfo = create('div', 'msg_info_wrapper', msg);
      const msgContentWrapper = create('div', 'msg_content', msgInfo);
      const msgContent = create('span', 'msg_text', msgContentWrapper, ['textContent', messages[i].content]);
      const timeWrapper = create('div', 'msg_time_wrapper', msgInfo);
      const time = create('span', 'msg_time', timeWrapper, ['textContent', getDate(date)]);

      msgTail.setAttribute('src', tail);
    }
  }
}
