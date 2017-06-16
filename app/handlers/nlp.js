const apiAi = require('apiai');
const config = require('./../config');
const exhibitorCategories = require('./../expo/exhibitor-categories');
const events = require('./../expo/events');
const register = require('./../expo/register');
const speakers = require('./../expo/speakers');
const days = require('./../expo/days');
const sponsorTypes = require('./../expo/sponsor-types');
const floorPlan = require('./../expo/floor-plan');
const mainMenu = require('./../menus/main-menu');

module.exports = (chat, payload) => {
  const apiAiClient = apiAi(config.EXPO_API_AI_TOKEN);
  const apiaiSession =
    apiAiClient.textRequest(payload.message.text, { sessionId: payload.sender.id });

  apiaiSession.on('response', (response) => {
    const result = response.result.fulfillment.speech;

    switch (response.result.action) {
      case 'intent.menu':
        mainMenu(chat);
        break;
      case 'intent.exhibitors':
        exhibitorCategories(chat);
        break;
      case 'intent.schedule':
        days(chat);
        break;
      case 'intent.speakers':
        speakers(chat);
        break;
      case 'intent.events':
        events(chat);
        break;
      case 'intent.floor_plan':
        floorPlan(chat);
        break;
      case 'intent.register':
        register(chat);
        break;
      case 'intent.sponsors':
        sponsorTypes(chat);
        break;
      default:
        if (result) chat.say(result);
        break;
    }
  });

  apiaiSession.on('error', error => console.log(error));
  apiaiSession.end();
};
