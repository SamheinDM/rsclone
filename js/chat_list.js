/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import defaultLogo from '../assets/default_user.svg';
import create from './utils/create.js';
import NetAPI from './network_api.js';
import ChatWindow from './chat_window';
import getDate from './utils/get_date.js';

export default class ChatList {
  constructor() {
    this.mainPanel = null;
    this.chatListWrapper = null;
    this.chatList = null;
    this.chat = null;
  }

  getMessagesFromChat(chatEl) {
    const indexOfClickedChat = chatEl.dataset.index;
    return this.chatList[indexOfClickedChat].messages;
  }

  clickOnChat = (e) => {
    e.preventDefault();
    const clikeedChatElement = e.target.closest('.chat_element');
    if (clikeedChatElement) {
      const chatListArr = document.querySelectorAll('.chat_element');
      for (let i = 0; i < chatListArr.length; i += 1) {
        chatListArr[i].classList.remove('chat_element_active');
      }
      clikeedChatElement.classList.toggle('chat_element_active');

      this.chat = new ChatWindow().init(this.getMessagesFromChat(clikeedChatElement));
      // this.chat.renderMessages(this.getMessagesFromChat(e));
    }
  }

  sortByDate(a, b) {
    let firstDate = a.messages[a.messages.length - 1].time;
    let secondDate = b.messages[b.messages.length - 1].time;
    firstDate = new Date(...firstDate);
    secondDate = new Date(...secondDate);
    return secondDate - firstDate;
  }

  sortChatList(list) {
    return list.sort(this.sortByDate);
  }

  init(username) {
    this.mainPanel = document.getElementById('main_panel');
    this.chatList = NetAPI.getChatList(username);
    this.chatList = this.sortChatList(this.chatList);
    this.chatListWrapper = create('div', 'chat_list_wrapper', this.mainPanel);

    for (let i = 0; i < this.chatList.length; i += 1) {
      const wrapper = create('div', 'chat_element', this.chatListWrapper, ['index', i]);

      const photoWrapper = create('img', 'user_photo_wrapper', wrapper);
      photoWrapper.setAttribute('src', defaultLogo);

      const { messages } = this.chatList[i];
      const lastMessage = messages[messages.length - 1];
      const date = new Date(...lastMessage.time);

      const msgInfoWrapper = create('div', 'msg_info_wrapper', wrapper);
      const infoWrapper = create('div', 'info_wrapper', msgInfoWrapper);
      create('span', 'chat_list_user_name', infoWrapper, ['textContent', this.chatList[i].name]);
      create('span', 'chat_list_last_date', infoWrapper, ['textContent', getDate(date)]);

      const lastMsgWrapper = create('div', 'last_msg_wrapper', msgInfoWrapper);
      create('span', 'last_msg', lastMsgWrapper, ['textContent', lastMessage.content]);
    }
    this.chatListWrapper.addEventListener('click', this.clickOnChat);
  }
}
