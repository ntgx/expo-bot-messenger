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

    const sch = /^SCHEDULE: (\w+) (\d+)$/gi.exec(postback);
    if (sch) {
      schedule(chat, sch[1], sch[2]);
      return;
    }

    const spo = /^SPONSORS: (\w+)$/gi.exec(postback);
    if (spo) {
      sponsors(chat, spo[1]);
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
        chat.say(`Postback: ${postback}`);
        break;
    }
  });
};
