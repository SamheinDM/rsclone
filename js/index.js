/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import '../css/main.css';
import NetAPI from './network_api.js';
import ChatList from './chat_list.js';
import Login from './login.js';
import { get } from './utils/storage.js';
import UI from './UI.js';

const loggedInfo = get('logged');
const userInterface = new UI();
const chatList = new ChatList();
const msgObj = {
  chatID: 'fdfc2425-1ebf-43fb-a414-d0e88c5d2ae0',
  message: 'nrjycnsfdbfdb',
  fromID: 'Serhgf',
  toID: 'asgbdfb',
};

const userObj = {
  login: 'test',
  password: 'goodPassword',
};

function initMainWindow() {
  userInterface.init();
  chatList.init(get('logged')[0]);
  // document.getElementById('new_chat').addEventListener('click', () => NetAPI.connect(msgObj));
  document.getElementById('new_chat').addEventListener('click', () => NetAPI.registration(userObj));
}

document.body.addEventListener('login', () => initMainWindow());

if (loggedInfo) {
  const isAuthorized = NetAPI.authentication(loggedInfo[0], loggedInfo[1]);
  if (!isAuthorized) {
    new Login().init();
  }
} else {
  new Login().init();
}
