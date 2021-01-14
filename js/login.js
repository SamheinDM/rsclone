/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';
import NetAPI from './network_api.js';
import { set } from './utils/storage.js';

export default class Login {
  constructor() {
    this.body = document.body;
    this.wrapper = null;
    this.errorMsg = null;
    this.loginInput = null;
    this.passwordInput = null;
  }

  removeErrMsg() {
    if (this.errorMsg) {
      this.wrapper.removeChild(this.errorMsg);
      this.errorMsg = null;
    }
  }

  submitLogin (event) {
    event.preventDefault();
    const result = NetAPI.authentication(this.loginInput.value, this.passwordInput.value);
    if (result) {
      this.body.removeChild(this.wrapper);
      set('logged', [this.loginInput.value, this.passwordInput.value]);
    } else {
      this.removeErrMsg();
      this.errorMsg = create('span', 'login_error_msg', this.wrapper, ['textContent', 'Login or password is not correct.']);
    }
  }

  init() {
    this.wrapper = create('div', 'main_wrapper login_screen', this.body);
    const form = create('form', 'login_form', this.wrapper, ['id', 'login_form']);
    create('label', 'login_label', form, ['for', 'login_input'], ['textContent', 'Login: ']);
    this.loginInput = create('input', 'login_input', form, 
      ['id', 'login_input'], 
      ['required', true], 
      ['autocomplete', 'username']);
    create('label', 'login_label', form, ['for', 'pass_input'], ['textContent', 'Password: ']);
    this.passwordInput = create('input', 'login_input', form,
      ['id', 'pass_input'],
      ['required', true],
      ['type', 'password'], 
      ['autocomplete', 'current-password']);
    const btnWrapper = create('div', 'login_btn_wrapper', form);
    const loginBtn = create('button', 'login_btn', btnWrapper, ['type', 'submit'], ['textContent', 'Login']);
    const registerBtn = create('button', 'login_btn', btnWrapper, ['textContent', 'Register']);

    form.onsubmit = (e) => this.submitLogin(e);

    this.loginInput.onfocus = () => this.removeErrMsg();
    this.passwordInput.onfocus = () => this.removeErrMsg();

    loginBtn.addEventListener('click', (e) => e.preventDefault);
    registerBtn.addEventListener('click', (e) => e.preventDefault());
  }
}
