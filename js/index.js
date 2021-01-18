/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import '../css/main.css';
import NetAPI from './network_api.js';
import ChatList from './chat_list.js';
import Login from './login.js';
// import create from './utils/create.js';
import { get } from './utils/storage.js';
import UI from './UI.js';
import ChatWindow from './chat_window.js';

const loggedInfo = get('logged');
const userInterface = new UI();
const chatList = new ChatList();
const chatWindow = new ChatWindow();

function initMainWindow() {
  userInterface.init();
  chatList.init(loggedInfo[0]);
}

document.body.addEventListener('login', () => initMainWindow());

function initChatWindow() {
  chatWindow.init();
}

if (loggedInfo) {
  const isAuthorized = NetAPI.authentication(loggedInfo[0], loggedInfo[1]);
  if (!isAuthorized) {
    new Login().init();
  }
} else {
  new Login().init();
}
