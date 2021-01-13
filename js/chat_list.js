/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';

export default class ChatList {
  constructor() {
    this.body = document.querySelector('body');
    this.wrapper = null;
  }

  init() {
    this.wrapper = create('div', 'main_wrapper', this.body);
  }
}
