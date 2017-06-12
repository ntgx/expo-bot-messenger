module.exports = (bot) => {
  bot.on('postback', (payload, chat) => {
    const postback = payload.postback.payload;

    switch (postback) {
      case 'PERSISTENT_MENU_MAIN_MENU':
        chat.say('I\'m here to help!');
        break;
      case 'PERSISTENT_MENU_REGISTER':
        chat.say('Tell me a little about yourself');
        break;
      default:
        chat.say(`Postback: ${postback}`);
        break;
    }
  });
};