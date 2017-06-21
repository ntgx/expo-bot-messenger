const exhibitorCategories = require('./../expo/exhibitor-categories');
const exhibitors = require('./../expo/exhibitors');
const events = require('./../expo/events');
const register = require('./../expo/register');
const speakers = require('./../expo/speakers');
const days = require('./../expo/days');
const schedule = require('./../expo/schedule');
const sponsorTypes = require('./../expo/sponsor-types');
const sponsors = require('./../expo/sponsors');
const floorPlan = require('./../expo/floor-plan');
const mainMenu = require('./../menus/main-menu');
const parseJSON = require('./../utils/parse-json');

module.exports = (bot) => {
  bot.on('postback', (payload, chat) => {
    const postback = payload.postback.payload;
    const data = parseJSON(postback);

    if (data) {
      switch (data.type) {
        case 'exhibitors':
          exhibitors(chat, data.zone, data.startFrom);
          break;
        case 'speakers':
          speakers(chat, data.startFrom);
          break;
        case 'schedule':
          schedule(chat, data.time, data.day);
          break;
        case 'sponsors':
          sponsors(chat, data.subType);
          break;
        default:
          console.log(`Unhandled Postback: ${postback}`);
          break;
      }
      return;
    }

    switch (postback) {
      case 'BOOTBOT_GET_STARTED':
        break;
      case 'PERSISTENT_MENU_MAIN_MENU':
        mainMenu(chat);
        break;
      case 'EXHIBITOR_CATEGORIES':
        exhibitorCategories(chat);
        break;
      case 'DAILY_SCHEDULE':
        days(chat);
        break;
      case 'EVENTS':
        events(chat);
        break;
      case 'SPEAKERS':
        speakers(chat, 0);
        break;
      case 'REGISTER':
        register(chat);
        break;
      case 'FLOOR_PLAN':
        floorPlan(chat);
        break;
      case 'SPONSOR_TYPES':
        sponsorTypes(chat);
        break;
      default:
        console.log(`Unhandled Postback: ${postback}`);
        break;
    }
  });
};
