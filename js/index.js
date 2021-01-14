/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import '../css/main.css';
import NetAPI from './network_api.js';
import ChatList from './chat_list.js';
import Login from './login.js';
import create from './utils/create.js';
import { get } from './utils/storage.js';
import UI from './UI.js';

const loggedInfo = get('logged');
const userInterface = new UI();
const chatList = new ChatList();

function initMainWindow() {
  userInterface.init();
  chatList.init(loggedInfo[0])
}

document.querySelector('body').addEventListener('login', () => initMainWindow());

if (loggedInfo) {
  const isAuthorized = NetAPI.authentication(loggedInfo[0], loggedInfo[1]);
  if (!isAuthorized) {
    new Login().init();
  }
} else {
  new Login().init();
}

