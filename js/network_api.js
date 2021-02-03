/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import io from './utils/socket.io.js';

const NetAPI = (function () {
  const socket = io.connect('http://localhost:3000');

  const tempInfo = [{
    name: 'Serhgf',
    messages: [{
      time: new Date(...[2020, 5, 25, 22, 5]),
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: new Date(...[2021, 0, 16, 23, 5]),
      content: 'Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis. Aliquam at enim ligula.',
      author: 'a',
    }, {
      time: new Date(...[2021, 0, 16, 23, 5]),
      content: 'Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis. Aliquam at enim ligula.',
      author: 'a',
    }, {
      time: new Date(...[2021, 0, 16, 23, 5]),
      content: 'Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis. Aliquam at enim ligula.',
      author: 'a',
    }, {
      time: new Date(...[2020, 5, 25, 22, 5]),
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: new Date(...[2020, 5, 25, 22, 5]),
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: new Date(...[2021, 0, 16, 23, 5]),
      content: 'Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis. Aliquam at enim ligula.',
      author: 'Serhgf',
    }, {
      time: new Date(...[2021, 0, 16, 23, 5]),
      content: 'Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis. Aliquam at enim ligula.',
      author: 'Serhgf',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: new Date(...[2020, 22, 5, 12, 5]),
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: new Date(...[2021, 0, 17, 23, 5]),
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: new Date(...[2020, 1, 3, 23, 5]),
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: new Date(...[2020, 1, 5, 23, 5]),
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: new Date(...[2020, 5, 25, 22, 5]),
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: new Date(...[2020, 11, 5, 23, 5]),
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: new Date(...[2020, 22, 5, 12, 5]),
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: new Date(...[2021, 5, 1, 23, 5]),
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: new Date(...[2020, 1, 3, 23, 5]),
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: new Date(...[2020, 1, 5, 23, 5]),
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: new Date(...[2020, 5, 25, 22, 5]),
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: new Date(...[2020, 11, 5, 23, 5]),
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: new Date(...[2020, 22, 5, 12, 5]),
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: new Date(...[2021, 5, 1, 23, 5]),
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: new Date(...[2020, 1, 3, 23, 5]),
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: new Date(...[2020, 1, 5, 23, 5]),
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: new Date(...[2020, 5, 25, 22, 5]),
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: new Date(...[2020, 11, 5, 23, 5]),
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: new Date(...[2020, 22, 5, 12, 5]),
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: new Date(...[2021, 5, 1, 23, 5]),
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: new Date(...[2020, 1, 3, 23, 5]),
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: new Date(...[2020, 1, 5, 23, 5]),
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: new Date(...[2020, 5, 25, 22, 5]),
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: new Date(...[2020, 11, 5, 23, 5]),
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: new Date(...[2020, 22, 5, 12, 5]),
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: new Date(...[2021, 5, 1, 23, 5]),
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: new Date(...[2020, 1, 3, 23, 5]),
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: new Date(...[2020, 1, 5, 23, 5]),
      content: '.ouil,hu,',
      author: 'a',
    }],
  }];

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

  function deleteContact(userObj) {
    console.log(' ');
  }

  return {
    socket,
    authResponse,
    createChat,
    sendMessage,
    registration,
    regResponse,
    authentication,
    deleteContact,
  };
}());

export default NetAPI;
