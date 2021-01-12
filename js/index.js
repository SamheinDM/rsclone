/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import '../css/main.css';
import NetAPI from './network_api.js';
import ChatList from './chat_list.js';
import Login from './login.js';
import create from './utils/create.js';

const maintWrapper = create('div', 'main_wrapper', );
const loginScreen = new Login();
loginScreen.init();
// loginScreen.show();
