/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import defaultLogo from '../assets/default_user.svg';
import create from './utils/create.js';
import { getChatDate } from './utils/get_date.js';

export default class ChatList {
  constructor(chat) {
    this.mainPanel = null;
    this.chatListWrapper = null;
    this.chatList = null;
    this.chat = chat;
    this.activeChatID = null;
    this.userName = null;
  }

  getMessagesFromChat(chatEl) {
    const indexOfClickedChat = chatEl.dataset.index;
    this.activeChatID = this.chatList[indexOfClickedChat].id;
    return {
      messages: this.chatList[indexOfClickedChat].messages,
      ID: this.activeChatID,
    };
  }

  clickOnChat = (e, login) => {
    e.preventDefault();
    const clikedChatElement = e.target.closest('.chat');
    if (clikedChatElement) {
      const chatListArr = document.querySelectorAll('.chat');
      for (let i = 0; i < chatListArr.length; i += 1) {
        chatListArr[i].classList.remove('chat_element_active');
      }
      clikedChatElement.classList.add('chat_element_active');
      this.chat.init(this.getMessagesFromChat(clikedChatElement), login);
    }
  }

  sortChatList(list) {
    return list.sort((a, b) => {
      let firstDate = a.messages[a.messages.length - 1].time;
      let secondDate = b.messages[b.messages.length - 1].time;
      firstDate = new Date(firstDate);
      secondDate = new Date(secondDate);
      return secondDate - firstDate;
    });
  }

  findRecipient = (usersArr) => (usersArr[0] === this.userName ? usersArr[1] : usersArr[0]);

  init() {
    this.mainPanel = document.getElementById('main_panel');

    if (this.chatListWrapper) {
      this.mainPanel.removeChild(this.chatListWrapper);
    }

    this.userName = global.localDB.user.login;

    this.chatList = global.localDB.chats;
    this.chatList = this.sortChatList(this.chatList);
    this.chatListWrapper = create('div', 'chat_list_wrapper', this.mainPanel);

    for (let i = 0; i < this.chatList.length; i += 1) {
      const wrapper = create('div', 'chat_element chat', this.chatListWrapper, ['index', i]);

      const photoWrapper = create('img', 'user_photo_wrapper', wrapper);
      photoWrapper.setAttribute('src', defaultLogo);

      const recipient = this.findRecipient(this.chatList[i].users);

      const { messages } = this.chatList[i];

      const lastMessage = messages[messages.length - 1];
      const date = getChatDate(new Date(lastMessage.time));

      const msgInfoWrapper = create('div', 'msg_info_wrapper', wrapper);
      const infoWrapper = create('div', 'info_wrapper', msgInfoWrapper);
      create('span', 'chat_list_user_name', infoWrapper, ['textContent', recipient]);
      create('span', 'chat_list_last_date', infoWrapper, ['textContent', date]);

      const lastMsgWrapper = create('div', 'last_msg_wrapper', msgInfoWrapper);
      create('span', 'last_msg', lastMsgWrapper, ['textContent', lastMessage.message]);

      if (this.activeChatID === this.chatList[i].id) {
        wrapper.classList.add('chat_element_active');
      }
    }
    this.chatListWrapper.addEventListener('click', (e) => this.clickOnChat(e, this.userName));
  }
}
