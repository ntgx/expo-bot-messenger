const BootBot = require('bootbot');
const config = require('./config');

// init bot
const bot = new BootBot({
  accessToken: config.PAGE_ACCESS_TOKEN,
  verifyToken: config.VERIFY_TOKEN,
  appSecret: config.APP_SECRET,
});

bot.setGreetingText("Hey there 😀 I'm the ICT Expo Ethiopia 2017 Bot 🤖 I'll be your assistant for the event. Click on 'Get Started' to see how i can help you");
bot.setGetStartedButton((payload, chat) => {
  chat.getUserProfile().then((user) => {
    chat.say(`Hello, ${user.first_name} 😀 I'm the ICT Expo Ethiopia 2017 Bot 🤖 I'll be your assistant for the event.\nHere are some of the things i can help you with!`);
    // TODO send menu cards
  });
});

bot.start(config.PORT);
