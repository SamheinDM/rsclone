/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import '../css/main.css';
import NetAPI from './network_api.js';
import ChatList from './chat_list.js';
import Login from './login.js';
import UI from './UI.js';
import ChatWindow from './chat_window';

const userInterface = new UI();
const chatWindow = new ChatWindow();
const chatList = new ChatList(chatWindow);
const login = new Login();
login.init();

global.localDB = {};

function initMainWindow() {
  userInterface.init(global.localDB.user);
  if (global.localDB.chats) {
    chatList.init();
  }
}

document.body.addEventListener('login', () => initMainWindow());
document.body.addEventListener('new_message', () => chatList.init());
document.body.addEventListener('delete_chat', () => chatList.deleteChat());

NetAPI.regResponse(login);

NetAPI.authResponse(login);
