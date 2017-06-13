const exhibitorCategories = require('./../expo/exhibitor-categories');
const exhibitors = require('./../expo/exhibitors');
const register = require('./../expo/register');
const speakers = require('./../expo/speakers');
const mainMenu = require('./../menus/main-menu');

module.exports = (bot) => {
  bot.on('postback', (payload, chat) => {
    const postback = payload.postback.payload;

    const sendExhibitors = /^EXHIBITORS: (\d+), (\d+)$/gi.exec(postback);
    if (sendExhibitors) {
      exhibitors(chat, Number(sendExhibitors[1]), Number(sendExhibitors[2]));
      return;
    }

    const moreSpeakers = /^MORE_SPEAKERS: (\d+)$/gi.exec(postback);
    if (moreSpeakers) {
      speakers(chat, Number(moreSpeakers[1]));
      return;
    }

    switch (postback) {
      case 'BOOTBOT_GET_STARTED':
        break;
      case 'PERSISTENT_MENU_MAIN_MENU':
        mainMenu(chat);
        break;
      case 'PERSISTENT_MENU_REGISTER':
        chat.say('Tell me a little about yourself');
        break;
      case 'EXHIBITOR_CATEGORIES':
        exhibitorCategories(chat);
        break;
      case 'SPEAKERS':
        speakers(chat, 0);
        break;
      case 'REGISTER':
        register(chat);
        break;
      case 'FLOOR_PLAN':
        chat.sendAttachment('image', 'https://i.imgur.com/9IyPo9f.jpg');
        break;
      case 'RATE':
        chat.say({
          text: 'Choose a score',
          quickReplies: [
            { content_type: 'text', title: '⭐️⭐️⭐️⭐️⭐️', payload: 'Rated!' },
            { content_type: 'text', title: '⭐️⭐️⭐️⭐️', payload: 'Rated!' },
            { content_type: 'text', title: '⭐️⭐️⭐️', payload: 'Rated!' },
            { content_type: 'text', title: '⭐️⭐️', payload: 'Rated!' },
            { content_type: 'text', title: '⭐️', payload: 'Rated!' },
          ],
        });
        break;
      default:
        chat.say(`Postback: ${postback}`);
        break;
    }
  });
};
