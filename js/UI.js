/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';
import defaultLogo from '../assets/default_user.svg';
import newChatIcon from '../assets/chat_icon.svg';
import menuIcon from '../assets/menu_icon.svg';

export default class UI {
  constructor() {
    this.body = document.body;
    this.wrapper = null;
    this.leftPanel = null;
    this.rightPanel = null;
    this.leftHeader = null;
    this.notification = null;
    this.chatSearch = null;
  }

  leftHeaderInit() {
    this.leftHeader = create('header', 'main_header', this.leftPanel);
    const userWrapper = create('div', 'main_user_photo_wrapper', this.leftHeader);
    create('img', 'user_photo', userWrapper, ['src', defaultLogo]);
    const mainMenuWrapper = create('div', 'main_menu_wrapper', this.leftHeader);
    // create('div', 'status', mainMenuWrapper);
    const newChat = create('div', 'menu_btn', mainMenuWrapper);
    create('img', 'new_chat_icon', newChat, ['src', newChatIcon]);
    const menu = create('div', 'menu_btn', mainMenuWrapper);
    create('img', 'menu_icon', menu, ['src', menuIcon]);
  }

  chatSearchInit() {
    this.chatSearch = create('div', 'chat_search', this.leftPanel);
  }

  init() {
    this.wrapper = create('div', 'main_wrapper', this.body);
    this.leftPanel = create('div', 'left_panel', this.wrapper, ['id', 'main_panel']);
    this.rightPanel = create('div', 'right_panel', this.wrapper, ['id', 'chat_panel']);
    this.leftHeaderInit();
    this.chatSearchInit();
  }
}
