const apiAi = require('apiai');
const config = require('./../config');

module.exports = (chat, payload) => {
  const apiAiClient = apiAi(config.EXPO_API_AI_TOKEN);
  const apiaiSession =
    apiAiClient.textRequest(payload.message.text, { sessionId: payload.sender.id });

  apiaiSession.on('response', (response) => {
    const result = response.result.fulfillment.speech;

    switch (response.result.action) {
      // TODO add and handle intents
      default:
        if (result) chat.say(result);
        break;
    }
  });

  apiaiSession.on('error', error => console.log(error));
  apiaiSession.end();
};
