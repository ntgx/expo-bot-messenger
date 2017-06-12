module.exports = (payload, chat) => {
  chat.getUserProfile().then((user) => {
    chat.say(`Hello, ${user.first_name} 😀 I'm the ICT Expo Ethiopia 2017 Bot 🤖 I'll be your assistant for the event.\nHere are some of the things i can help you with!`);
    // TODO send menu cards
  });
};
