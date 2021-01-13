/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
export function getChatList(user) { return ['sfdf', 'tgkmbm', 'fvmghyk']; }

export function autentication(login, password) {
  if (login === 'a' && password === 's') {
    document.querySelector('body').dispatchEvent(new Event('login'));
    return true;
  }
  return false;
}
