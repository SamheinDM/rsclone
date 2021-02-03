/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import create from './utils/create.js';
import defaultLogo from '../assets/default_user.svg';
import newChatIcon from '../assets/chat_icon.svg';
import menuIcon from '../assets/menu_icon.svg';
import leftArrow from '../assets/left_arrow.svg';
import NetAPI from './network_api.js';

export default class UI {
  constructor() {
    this.body = document.body;
    this.wrapper = null;
    this.leftPanel = null;
    this.rightPanel = null;
    this.leftHeader = null;
    this.chatSearch = null;
    this.sideMenu = null;
    this.selectedContact = null;
    this.mainMenuButton = null;
    this.dropMenuWrapper = null;
    this.dropMenu = null;
    this.user = null;
  }

  getChatIndex = (recipient) => {
    const { chats } = global.localDB;
    for (let i = 0; i < chats.length; i += 1) {
      if (chats[i].users.indexOf(recipient) > -1) {
        return i;
      }
    }
    return -1;
  }

  createNewChat = (e) => {
    e.preventDefault();
    const clikedContact = e.target.closest('.contact');
    const recipient = clikedContact.dataset.login;
    const chatIndex = this.getChatIndex(recipient);
    if (chatIndex > -1) {
      const pseudoClickedChat = document.querySelectorAll('.chat')[chatIndex];
      pseudoClickedChat.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
    } else {
      NetAPI.createChat([this.user.login, recipient]);
    }
    this.hideMenu(e);
  }

  hideMenu = (e) => {
    e.preventDefault();
    this.sideMenu.classList.remove('menu_open');
    setTimeout(() => {
      this.wrapper.removeChild(this.sideMenu);
      this.sideMenu = null;
    }, 300);
    this.selectedContact = null;
  }

  deleteContact = () => {
    if (this.selectedContact) {
      const localUser = global.localDB.user;
      const localChats = global.localDB.chats;
      document.querySelector('.chat_list_wrapper').removeChild(this.selectedContact);

      const indexOfDeletedContact = localUser.contacts.indexOf(this.selectedContact.dataset.login);
      localUser.contacts.splice(indexOfDeletedContact, 1);

      let chatIndexToDelete;
      const chatsArr = document.querySelectorAll('.chat');
      for (let i = 0; i < chatsArr.length; i += 1) {
        if (chatsArr[i].dataset.login === this.selectedContact.dataset.login) {
          chatIndexToDelete = i;
        }
      }
      const chatID = localChats[chatIndexToDelete].id;
      localUser.deletedChatIDs.push(chatID);
      const chatIDindex = localUser.chatsIDs.indexOf(chatID);
      localUser.chatsIDs.splice(chatIDindex, 1);
      localChats.splice(chatIndexToDelete, 1);

      NetAPI.deleteContact(localUser);
      document.body.dispatchEvent(new Event('delete_chat'));

      this.selectedContact = null;
    }
  }

  createSideMenuHeader = (headerText) => {
    const header = create('header', 'side_menu_header', this.sideMenu);
    const headContentWrapper = create('div', 'smh_content_wrapper', header);
    const backButton = create('button', 'smh_back_button', headContentWrapper);
    create('img', 'back_btn_img', backButton, ['src', leftArrow]);
    const headerTextWrapper = create('div', 'smh_text_wrapper', headContentWrapper);
    create('span', 'smh_text', headerTextWrapper, ['textContent', headerText]);

    backButton.addEventListener('click', (e) => this.hideMenu(e));
  }

  createContactsActions = () => {
    const actionsWrapper = create('div', 'sm_actions_wrapper', this.sideMenu);
    const addBtn = create('button', 'side_menu_btn', actionsWrapper, ['textContent', 'Добавить']);
    const delBtn = create('button', 'side_menu_btn', actionsWrapper, ['textContent', 'Удалить']);

    delBtn.addEventListener('click', this.deleteContact);
  }

  createContactsList = (eventHandler) => {
    const userContacts = this.user.contacts;
    const contactsList = create('div', 'chat_list_wrapper', this.sideMenu);
    for (let i = 0; i < userContacts.length; i += 1) {
      const contact = this.user.contacts[i];

      const wrapper = create('div', 'chat_element contact', contactsList, ['login', contact]);

      const photoWrapper = create('img', 'user_photo_wrapper', wrapper);
      photoWrapper.setAttribute('src', defaultLogo);

      const msgInfoWrapper = create('div', 'msg_info_wrapper', wrapper);
      const infoWrapper = create('div', 'info_wrapper', msgInfoWrapper);
      create('span', 'chat_list_user_name', infoWrapper, ['textContent', contact]);
    }

    contactsList.addEventListener('click', (e) => eventHandler(e));
  }

  showNewChatMenu = () => {
    this.sideMenu = create('div', 'side_menu_wrapper', null);
    this.wrapper.insertBefore(this.sideMenu, this.wrapper.firstChild);

    this.createSideMenuHeader('Новый чат');
    this.createContactsList(this.createNewChat);

    setTimeout(() => this.sideMenu.classList.add('menu_open'), 100);
  }

  selectContact = (e) => {
    e.preventDefault();
    const clikedElement = e.target.closest('.contact');
    this.selectedContact = clikedElement;
    const chatListArr = document.querySelectorAll('.contact');
    for (let i = 0; i < chatListArr.length; i += 1) {
      chatListArr[i].classList.remove('chat_element_active');
    }
    clikedElement.classList.add('chat_element_active');
  }

  showContactsMenu = () => {
    this.sideMenu = create('div', 'side_menu_wrapper', null);
    this.wrapper.insertBefore(this.sideMenu, this.wrapper.firstChild);

    this.createSideMenuHeader('Контакты');
    this.createContactsActions();
    this.createContactsList(this.selectContact);

    setTimeout(() => this.sideMenu.classList.add('menu_open'), 100);
  }

  logout = () => {
    console.log('logout');
  }

  hideDropMenu = (e) => {
    e.preventDefault();
    const isClickOnMenu = e.target.closest('.drop_menu');
    if (!isClickOnMenu) {
      this.dropMenu.classList.remove('open_drop_menu');
      this.mainMenuButton.classList.remove('menu_btn_active');
      setTimeout(() => {
        this.dropMenuWrapper.removeChild(this.dropMenu);
        this.dropMenu = null;
      }, 200);
      document.removeEventListener('click', this.hideDropMenu);
    }
  }

  toggleDropMenu = (e) => {
    const menuList = create('ul', 'drop_menu_list', null);
    const contactsBtn = create('li', 'list_item', menuList, ['textContent', 'Контакты']);
    const exitBtn = create('li', 'list_item', menuList, ['textContent', 'Выйти']);
    if (this.dropMenu) {
      contactsBtn.removeEventListener('click', this.showContactsMenu);
      exitBtn.removeEventListener('click', this.logout);
      this.hideDropMenu(e);
    } else {
      e.preventDefault();
      this.dropMenu = create('div', 'drop_menu', this.dropMenuWrapper);
      this.dropMenu.appendChild(menuList);
      this.mainMenuButton.classList.add('menu_btn_active');

      contactsBtn.addEventListener('click', this.showContactsMenu);
      exitBtn.addEventListener('click', this.logout);
      setTimeout(() => {
        this.dropMenu.classList.add('open_drop_menu');
        document.addEventListener('click', this.hideDropMenu);
      }, 100);
    }
  }

  leftHeaderInit() {
    this.leftHeader = create('header', 'main_header', this.leftPanel);
    const userWrapper = create('div', 'main_user_photo_wrapper', this.leftHeader);
    create('img', 'user_photo', userWrapper, ['src', defaultLogo]);
    const mainMenuWrapper = create('div', 'main_menu_wrapper', this.leftHeader);
    const newChat = create('div', 'menu_btn', mainMenuWrapper, ['id', 'new_chat']);
    create('img', 'new_chat_icon', newChat, ['src', newChatIcon]);
    this.mainMenuButton = create('div', 'menu_btn', mainMenuWrapper, ['id', 'main_menu']);
    create('img', 'menu_icon', this.mainMenuButton, ['src', menuIcon]);
    this.dropMenuWrapper = create('span', 'drop_menu_wrapper', mainMenuWrapper);

    newChat.addEventListener('click', this.showNewChatMenu);
    this.mainMenuButton.addEventListener('click', this.toggleDropMenu);
  }

  chatSearchInit() {
    this.chatSearch = create('div', 'chat_search', this.leftPanel);
  }

  init() {
    this.user = global.localDB.user;
    this.wrapper = create('div', 'main_wrapper', this.body);
    this.leftPanel = create('div', 'left_panel', this.wrapper, ['id', 'main_panel']);
    this.rightPanel = create('div', 'right_panel', this.wrapper, ['id', 'chat_panel']);
    this.leftHeaderInit();
    this.chatSearchInit();
  }
}
