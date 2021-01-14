/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
const NetAPI = function() {
  const tempInfo = [{
    name: 'Serhgf',
    messages: [{
      time: '2020-25-05 22:05',
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf'
    }, {
      time: '2020-25-05 23:05',
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a'
    }]}, {
    name: 'fmnedn',
    messages: [{
      time: '2020-22-05 12:05',
      content: 'mjk.g,iu.gu.',
      author: 'a'
    }, {
      time: '2021-05-01 23:05',
      content: 'dfhsrtj',
      author: 'fmnedn'
    }]}, {
    name: 'hvfyktm',
    messages: [{
      time: '2020-01-03 23:05',
      content: 'm,my.i',
      author: 'hvfyktm'
    }, {
      time: '2020-25-05 23:05',
      content: '.ouil,hu,',
      author: 'a'
    }]}];
  let chatInfo;

  const getChatInfo = (user) => {
    if (!chatInfo) {
      chatInfo = tempInfo;
    }
  };

  const getChatList = (user) => {
    getChatInfo();
    return chatInfo;
  }

  const authentication = (login, password) => {
    if (login === 'a' && password === 's') {
      document.querySelector('body').dispatchEvent(new Event('login'));
      return true;
    }
    return false;
  }

  return {
    getChatList: getChatList,
    authentication: authentication,
  }
}();

export default NetAPI;
