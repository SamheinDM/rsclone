/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import '../css/main.css';
import { autentication } from './network_api.js';
import ChatList from './chat_list.js';
import Login from './login.js';
import create from './utils/create.js';
import { get } from './utils/storage.js';

const chatList = new ChatList();
document.querySelector('body').addEventListener('login', () => chatList.init());

const loggedInfo = get('logged');
if (loggedInfo) {
  const isAuthorized = autentication(loggedInfo[0], loggedInfo[1]);
  if (!isAuthorized) {
    new Login().init();
  }
} else {
  new Login().init();
}

