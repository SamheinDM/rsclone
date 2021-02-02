/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';
import defaultLogo from '../assets/default_user.svg';
import newChatIcon from '../assets/chat_icon.svg';
import menuIcon from '../assets/menu_icon.svg';
import leftArrow from '../assets/left_arrow.svg';
import NetAPI from './network_api.js';

export default class UI {
  constructor() {
    this.body = document.body;
    this.wrapper = null;
    this.leftPanel = null;
    this.rightPanel = null;
    this.leftHeader = null;
    this.chatSearch = null;
    this.sideMenu = null;
    this.user = null;
  }

  getChatIndex = (recipient) => {
    const { chats } = global.localDB;
    for (let i = 0; i < chats.length; i += 1) {
      if (chats[i].users.indexOf(recipient) > -1) {
        return i;
      }
    }
    return -1;
  }

  createNewChat = (e) => {
    e.preventDefault();
    const clikedContact = e.target.closest('.contact');
    const recipient = clikedContact.dataset.login;
    const chatIndex = this.getChatIndex(recipient);
    if (chatIndex > -1) {
      const pseudoClickedChat = document.querySelectorAll('.chat')[chatIndex];
      pseudoClickedChat.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
    } else {
      NetAPI.createChat([this.user.login, recipient]);
    }
    this.hideMenu(e);
  }

  hideMenu = (e) => {
    e.preventDefault();
    this.sideMenu.classList.remove('menu_open');
    setTimeout(() => {
      this.wrapper.removeChild(this.sideMenu);
      this.sideMenu = null;
    }, 300);
  }

  showNewChatMenu = () => {
    this.sideMenu = create('div', 'side_menu_wrapper', null);
    this.wrapper.insertBefore(this.sideMenu, this.wrapper.firstChild);

    const header = create('header', 'side_menu_header', this.sideMenu);
    const headContentWrapper = create('div', 'smh_content_wrapper', header);
    const backButton = create('button', 'smh_back_button', headContentWrapper);
    create('img', 'back_btn_img', backButton, ['src', leftArrow]);
    const headerTextWrapper = create('div', 'smh_text_wrapper', headContentWrapper);
    create('span', 'smh_text', headerTextWrapper, ['textContent', 'Новый чат']);

    const actionsWrapper = create('div', 'sm_actions_wrapper', this.sideMenu);
    const addBtn = create('button', 'side_menu_btn', actionsWrapper, ['textContent', 'Добавить']);
    const delBtn = create('button', 'side_menu_btn', actionsWrapper, ['textContent', 'Удалить']);

    const userContacts = this.user.contacts;
    const contactsList = create('div', 'chat_list_wrapper', this.sideMenu);
    for (let i = 0; i < userContacts.length; i += 1) {
      const contact = this.user.contacts[i];

      const wrapper = create('div', 'chat_element contact', contactsList, ['login', contact]);

      const photoWrapper = create('img', 'user_photo_wrapper', wrapper);
      photoWrapper.setAttribute('src', defaultLogo);

      const msgInfoWrapper = create('div', 'msg_info_wrapper', wrapper);
      const infoWrapper = create('div', 'info_wrapper', msgInfoWrapper);
      create('span', 'chat_list_user_name', infoWrapper, ['textContent', contact]);
    }

    setTimeout(() => this.sideMenu.classList.add('menu_open'), 100);
    backButton.addEventListener('click', (e) => this.hideMenu(e));

    contactsList.addEventListener('click', (e) => this.createNewChat(e));
  }

  leftHeaderInit() {
    this.leftHeader = create('header', 'main_header', this.leftPanel);
    const userWrapper = create('div', 'main_user_photo_wrapper', this.leftHeader);
    create('img', 'user_photo', userWrapper, ['src', defaultLogo]);
    const mainMenuWrapper = create('div', 'main_menu_wrapper', this.leftHeader);
    const newChat = create('div', 'menu_btn', mainMenuWrapper, ['id', 'new_chat']);
    create('img', 'new_chat_icon', newChat, ['src', newChatIcon]);
    const menu = create('div', 'menu_btn', mainMenuWrapper);
    create('img', 'menu_icon', menu, ['src', menuIcon]);

    newChat.addEventListener('click', this.showNewChatMenu);
  }

  chatSearchInit() {
    this.chatSearch = create('div', 'chat_search', this.leftPanel);
  }

  init() {
    this.user = global.localDB.user;
    this.wrapper = create('div', 'main_wrapper', this.body);
    this.leftPanel = create('div', 'left_panel', this.wrapper, ['id', 'main_panel']);
    this.rightPanel = create('div', 'right_panel', this.wrapper, ['id', 'chat_panel']);
    this.leftHeaderInit();
    this.chatSearchInit();
  }
}
