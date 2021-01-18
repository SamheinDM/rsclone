/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import create from './utils/create';

export default class ChatWindow {
  constructor() {
    this.mainChatWrapper = null;
    this.header = null;
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
    this.chatBG = create('div', 'chat_bg', this.chatWrapper);
    this.footer = create('footer', 'chat_footer', this.mainChatWrapper);

    this.renderMessages(messages);
  }

  renderMessages(messages) {
    for (let i = 0; i < messages.length; i += 1) {
      create('div', 'msg_wrapper', this.chatBG);
    }
  }
}
