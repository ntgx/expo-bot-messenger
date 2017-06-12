const User = require('./../models/user');

/* eslint-disable no-param-reassign */
module.exports = (convo) => {
  User.findOne({ userId: convo.userId }).then((user) => {
    user.registeredForLotto = true;
    user.interestAreas = convo.get('interestAreas');
    user.tel = convo.get('tel');
    return user.save();
  }).then(() => {
    convo.say('Registered successfuly, I\'ll send you a message here if you win 😉');
    convo.sendAttachment('image', 'https://i.imgur.com/9IyPo9f.jpg');
    convo.end();
  }).catch((err) => {
    console.log('error updating user:', err);
    convo.say('Something went wrong please try again in a bit!');
    convo.end();
  });
};
