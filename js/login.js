/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';
import { autentication } from './network_api.js';
import { set, get } from './utils/storage.js';

export default class Login {
  constructor() {
    this.body = document.querySelector('body');
    this.wrapper = null;
    this.errorMsg = null;
  }

  removeErrMsg = () => {
    if (this.errorMsg) {
      this.body.removeChild(this.errorMsg);
    }
  }

  init() {
    this.wrapper = create('div', 'login_wrapper', this.body);
    const form = create('form', 'login_form', this.wrapper, ['id', 'login_form']);
    create('label', 'login_label', form, ['for', 'login_input'], ['textContent', 'Login: ']);
    const loginInput = create('input', 'login_input', form, ['id', 'login_input'], ['required', true]);
    create('label', 'login_label', form, ['for', 'pass_input'], ['textContent', 'Password: ']);
    const passwordInput = create('input', 'login_input', form,
      ['id', 'pass_input'],
      ['required', true],
      ['type', 'password']);
    const btnWrapper = create('div', 'login_btn_wrapper', form);
    const loginBtn = create('button', 'login_btn', btnWrapper, ['type', 'submit'], ['textContent', 'Login']);
    const registerBtn = create('button', 'login_btn', btnWrapper, ['textContent', 'Register']);

    form.onsubmit = (event) => {
      event.preventDefault();
      const login = document.getElementById('login_input');
      const password = document.getElementById('pass_input');
      const result = autentication(login.value, password.value);
      if (result) {
        this.body.removeChild(this.wrapper);
      }
      if (this.errorMsg) {
        this.body.removeChild(this.errorMsg);
      }
      this.errorMsg = create('span', 'login_error_msg', this.wrapper, ['textContent', 'Login or password is not correct.']);
    };
    loginInput.onfocus = () => this.wrapper.removeChild(this.errorMsg);
    passwordInput.onfocus = () => this.wrapper.removeChild(this.errorMsg);
    loginBtn.addEventListener('click', (e) => e.preventDefault);
    registerBtn.addEventListener('click', (e) => e.preventDefault());
  }
}
