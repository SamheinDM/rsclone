/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import defaultLogo from '../assets/default_user.svg';
import create from './utils/create.js';
import NetAPI from './network_api.js';

export default class ChatList {
  constructor() {
    this.body = document.body;
    this.mainPanel = null;
    this.chatListWrapper = null;
    this.chatList = null;
  }

  getMessageDate(date) {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  init(username) {
    this.mainPanel = document.getElementById('main_panel');
    this.chatList = NetAPI.getChatList(username);
    this.chatListWrapper = create('div', 'chat_list_wrapper', this.mainPanel);
    for (let i = 0; i < this.chatList.length; i += 1) {
      const wrapper = create('div', 'chat_element', this.chatListWrapper);
      const photoWrapper = create('div', 'user_photo', wrapper);
      // const userPhoto = create('img', null, photoWrapper);
      // userPhoto.setAttribute('src', `${defaultLogo}`);

      const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
      img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", defaultLogo);
      photoWrapper.appendChild(img);

      console.log(defaultLogo)
      const msgInfoWrapper = create('div', 'msg_info_wrapper', wrapper);
      const infoWrapper = create('div', 'info_wrapper', msgInfoWrapper);
      const messages = this.chatList[i].messages;
      const lastMessage = messages[messages.length - 1];
      const date = new Date(...lastMessage.time);
      create('span', 'chat_list_user_name', infoWrapper, ['textContent', this.chatList[i].name]);
      create('span', 'chat_list_last_date', infoWrapper, ['textContent', this.getMessageDate(date)]);
      const lastMsgWrapper = create('div', 'last_msg_wrapper', msgInfoWrapper);
      create('span', null, lastMsgWrapper, ['textContent', lastMessage.content]);
    }
  }
}
