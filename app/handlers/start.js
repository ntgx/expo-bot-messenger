const User = require('./../models/user');
const mainMenu = require('./../menus/main-menu');

/* eslint-disable no-param-reassign */
module.exports = (payload, chat) => {
  chat.getUserProfile().then((userProfile) => {
    userProfile.userId = payload.sender.id;
    userProfile.startedOn = payload.timestamp;
    const user = new User(userProfile);
    user.save((err) => {
      if (err) {
        if (err.errors.userId.kind === 'unique') {
          chat.say(`Welcome back ${user.first_name}😜`, { typing: true }).then(() => {
            mainMenu(chat);
          });
        } else { // TODO handle signup error
          console.log('error:', err.message);
        }
      } else { // on user saved
        chat.say(`Hello ${user.first_name}, 😀 I'm the ICT Expo 🇪🇹 2017 Bot 🤖 I'll be your assistant for the event.\nHere are some of the things i can help you with!`, { typing: true }).then(() => {
          mainMenu(chat);
        });
      }
    });
  });
};
