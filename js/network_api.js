/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import io from './utils/socket.io.js';

const NetAPI = (function () {
  const socket = io.connect();

  let possibleContacts = [];

  function registration(info) {
    socket.emit('registration', info);
  }

  function regResponse(login) {
    socket.on('registration', () => login.createErrMsg('Такой пользователь уже существует.'));
  }

  function authentication(login, password) {
    socket.emit('authentication', { login, password });
  }

  function authResponse(login) {
    socket.on('authorise', (data) => {
      if (data) {
        global.localDB = data;
        document.body.removeChild(login.wrapper);
        document.body.dispatchEvent(new Event('login'));
      } else {
        login.removeErrMsg();
        login.createErrMsg('Неверный логин/пароль.');
      }
    });
  }

  function createChat(usersArray) {
    socket.emit('create_chat', usersArray);
  }

  function sendMessage(messageObj, chatID) {
    socket.emit('message', { messageObj, chatID });
  }

  async function getPossibleContacts(user) {
    socket.emit('possible_contacts', user);
    socket.on('possible_contacts', (contacts) => {
      possibleContacts = contacts;
      document.body.dispatchEvent(new Event('possible_contacts'));
    });
  }

  function deleteContact(userObj) {
    socket.emit('delete_contact', userObj);
  }

  return {
    socket,
    authResponse,
    createChat,
    sendMessage,
    registration,
    regResponse,
    authentication,
    getPossibleContacts,
    possibleContacts,
    deleteContact,
  };
}());

export default NetAPI;
