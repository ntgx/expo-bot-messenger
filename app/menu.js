module.exports = (bot) => {
  bot.setPersistentMenu([
    {
      type: 'postback',
      title: 'Main Menu',
      payload: 'PERSISTENT_MENU_MAIN_MENU',
    },
    {
      type: 'postback',
      title: 'Tell us about yourself',
      payload: 'PERSISTENT_MENU_REGISTER',
    },
    {
      type: 'web_url',
      title: 'Go to Website',
      url: 'http://ictexpoethiopia.com',
    },
  ]);
};
