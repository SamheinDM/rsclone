/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
const NetAPI = (function () {
  const tempInfo = [{
    name: 'Serhgf',
    messages: [{
      time: [2020, 5, 25, 22, 5],
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: [2021, 0, 16, 23, 5],
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: [2020, 22, 5, 12, 5],
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: [2021, 0, 17, 23, 5],
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: [2020, 1, 3, 23, 5],
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: [2020, 1, 5, 23, 5],
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: [2020, 5, 25, 22, 5],
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: [2020, 11, 5, 23, 5],
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: [2020, 22, 5, 12, 5],
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: [2021, 5, 1, 23, 5],
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: [2020, 1, 3, 23, 5],
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: [2020, 1, 5, 23, 5],
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: [2020, 5, 25, 22, 5],
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: [2020, 11, 5, 23, 5],
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: [2020, 22, 5, 12, 5],
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: [2021, 5, 1, 23, 5],
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: [2020, 1, 3, 23, 5],
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: [2020, 1, 5, 23, 5],
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: [2020, 5, 25, 22, 5],
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: [2020, 11, 5, 23, 5],
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: [2020, 22, 5, 12, 5],
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: [2021, 5, 1, 23, 5],
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: [2020, 1, 3, 23, 5],
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: [2020, 1, 5, 23, 5],
      content: '.ouil,hu,',
      author: 'a',
    }],
  }, {
    name: 'Serhgf',
    messages: [{
      time: [2020, 5, 25, 22, 5],
      content: 'nrjycnsfdbfdb',
      author: 'Serhgf',
    }, {
      time: [2020, 11, 5, 23, 5],
      content: 'nrjycnasfcerhgsfdbfdb',
      author: 'a',
    }],
  }, {
    name: 'fmnedn',
    messages: [{
      time: [2020, 22, 5, 12, 5],
      content: 'mjk.g,iu.gu.',
      author: 'a',
    }, {
      time: [2021, 5, 1, 23, 5],
      content: 'dfhsrtj',
      author: 'fmnedn',
    }],
  }, {
    name: 'hvfyktm',
    messages: [{
      time: [2020, 1, 3, 23, 5],
      content: 'm,my.i',
      author: 'hvfyktm',
    }, {
      time: [2020, 1, 5, 23, 5],
      content: '.ouil,hu,',
      author: 'a',
    }],
  }];
  let chatInfo;

  const getChatInfo = (user) => {
    if (!chatInfo) {
      chatInfo = tempInfo;
    }
  };

  const getChatList = (user) => {
    getChatInfo();
    return chatInfo;
  };

  const authentication = (login, password) => {
    if (login === 'a' && password === 's') {
      document.querySelector('body').dispatchEvent(new Event('login'));
      return true;
    }
    return false;
  };

  return {
    getChatList,
    authentication,
  };
}());

export default NetAPI;
