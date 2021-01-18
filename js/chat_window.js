/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import create from "./utils/create";

export default class ChatWindow {
  constructor() {
    this.chatWrapper = null;
  }

  init() {
    this.chatWrapper = document.getElementById('chat_panel');
    this.header = create('header', 'main_header', this.chatWrapper);
  }
}
