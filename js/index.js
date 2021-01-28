/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import '../css/main.css';
import NetAPI from './network_api.js';
import ChatList from './chat_list.js';
import Login from './login.js';
import UI from './UI.js';

const userInterface = new UI();
const chatList = new ChatList();
const login = new Login();
login.init();

let localDB = {};

function initMainWindow() {
  userInterface.init(localDB.user);
  chatList.init(localDB);
}

document.body.addEventListener('login', () => initMainWindow());

NetAPI.regResponse(login);

NetAPI.socket.on('authorise', (data) => {
  if (data) {
    localDB = data;
    document.body.removeChild(login.wrapper);
    document.body.dispatchEvent(new Event('login'));
  } else {
    login.removeErrMsg();
    login.createErrMsg('Неверный логин/пароль.');
  }
});
