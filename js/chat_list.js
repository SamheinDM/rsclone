/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';
import NetAPI from './network_api.js';

export default class ChatList {
  constructor() {
    this.body = document.body;
    this.mainPanel = null;
    this.chatListWrapper = null;
    this.chatList = null;
  }

  init(username) {
    this.mainPanel = document.getElementById('main_panel');
    this.chatList = NetAPI.getChatList(username);
    this.chatListWrapper = create('div', 'chat_list_wrapper', this.mainPanel);
    for (let i = 0; i < this.chatList.length; i += 1) {
      const wrapper = create('div', 'chat_element', this.chatListWrapper);
      const photoWrapper = create('div', 'user_photo', wrapper);
      const infoWrapper = create('div', 'info_wrapper', wrapper);
      create('span', 'chat_list_user_name', infoWrapper, ['textContent', this.chatList[i].name]);
      create('span', 'chat_list_last_date', infoWrapper, 
        ['textContent', new Date(this.chatList[i].messages[this.chatList[i].messages.length - 1].time).getTime()]);
    }
  }
}
