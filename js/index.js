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
  // time: new Date(...[2020, 5, 25, 22, 5]),
  message: 'nrjycnsfdbfdb',
  user: 'Serhgf',
};

function initMainWindow() {
  userInterface.init();
  chatList.init(get('logged')[0]);
  document.getElementById('new_chat').addEventListener('click', () => NetAPI.connect(msgObj));
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
