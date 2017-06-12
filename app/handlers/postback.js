const mainMenu = require('./../expo/main-menu');

module.exports = (bot) => {
  bot.on('postback', (payload, chat) => {
    const postback = payload.postback.payload;

    switch (postback) {
      case 'PERSISTENT_MENU_MAIN_MENU':
        mainMenu(chat);
        break;
      case 'PERSISTENT_MENU_REGISTER':
        chat.say('Tell me a little about yourself');
        break;
      case 'FLOOR_PLAN':
        chat.sendAttachment('image', 'https://i.imgur.com/9IyPo9f.jpg');
        break;
      default:
        chat.say(`Postback: ${postback}`);
        break;
    }
  });
};
