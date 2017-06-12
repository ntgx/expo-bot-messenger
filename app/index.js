const BootBot = require('bootbot');
const config = require('./config');
const menu = require('./menu');
const start = require('./handlers/start');
const message = require('./handlers/message');
const postback = require('./handlers/postback');

// init bot
const bot = new BootBot({
  accessToken: config.PAGE_ACCESS_TOKEN,
  verifyToken: config.VERIFY_TOKEN,
  appSecret: config.APP_SECRET,
});

bot.module(menu);
bot.module(message);
bot.module(postback);

bot.setGreetingText("Hey there 😀 I'm the ICT Expo Ethiopia 2017 Bot 🤖 I'll be your assistant for the event. Click on 'Get Started' to see how i can help you");
bot.setGetStartedButton(start);

bot.start(config.PORT);
