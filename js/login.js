import create from './utils/create.js';

export default class Login {
  constructor() {
    this.body = document.querySelector('body');
    this.wrapper = null;
  }

  init() {
    this.wrapper = create('div', 'login_wrapper', this.body);
    const form = create('form', 'login_form', this.wrapper, ['id', 'login_form']);
    create('label', 'login_label', form, ['for', 'login_input'], ['textContent', 'Login: ']);
    create('input', 'login_input', form, ['id', 'login_input'], ['required', true]);
    create('label', 'login_label', form, ['for', 'pass_input'], ['textContent', 'Password: ']);
    create('input', 'login_input', form, 
      ['id', 'pass_input'], 
      ['required', true], 
      ['type', 'password']);
    const btnWrapper = create('div', 'login_btn_wrapper', form);
    const loginBtn = create('button', 'login_btn', btnWrapper, ['type', 'submit'], ['textContent', 'Login']);
    const registerBtn = create('button', 'login_btn', btnWrapper,  ['textContent', 'Register']);
    loginBtn.addEventListener('click', (e) => );
    registerBtn.addEventListener('click', (e) => e.preventDefault());
  }

  
}
