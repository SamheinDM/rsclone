/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
const NetAPI = function() {
  const getChatList = (user) => ['sfdf', 'tgkmbm', 'fvmghyk'];

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
