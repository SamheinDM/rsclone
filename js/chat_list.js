/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';
import { getChatList } from './network_api.js';

export default class ChatList {
  constructor() {
    this.body = document.querySelector('body');
    this.mainPanel = document.querySelector('.left_panel');
    this.chatListWrapper = null;
    this.chatList = null;
  }

  init(username) {
    this.chatList = getChatList(username);
    this.chatListWrapper = create('div', 'chat_list_wrapper', this.mainPanel);
    for (let i = 0; i < this.chatList.length; i += 1) {
      create('div', 'chat_element', this.chatListWrapper);
    }
  }
}
