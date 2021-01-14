/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';

export default class UI {
  constructor() {
    this.body = document.body;
    this.wrapper = null;
    this.leftPanel = null;
    this.rightPanel = null;
    this.leftHeader = null;
    this.rightHeader = null;
    this.notification = null;
    this.chatSearch = null;
  }

  leftHeaderInit() {
    this.leftHeader = create('header', 'main_header', this.leftPanel);
    const userWrapper = create('div', null, this.leftHeader);
    create('img', 'user_photo', userWrapper);
    const mainMenuWrapper = create('div', null, this.leftHeader);
    create('div', 'status', mainMenuWrapper);
    create('div', 'new_chat', mainMenuWrapper);
    create('div', 'menu', mainMenuWrapper);
  }

  notificationInit() {
    this.notification = create('div', 'notification', this.leftPanel);
  }

  chatSearchInit() {
    this.chatSearch = create('div', 'chat_search', this.leftPanel);
  }

  init() {
    this.wrapper = create('div', 'main_wrapper', this.body);
    this.leftPanel = create('div', 'left_panel', this.wrapper, ['id', 'main_panel']);
    this.rightPanel = create('div', 'right_panel', this.wrapper);
    this.leftHeaderInit();
    this.notificationInit();
    this.chatSearchInit();
  }
}
