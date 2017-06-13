module.exports = (bot) => {
  bot.setPersistentMenu([
    {
      type: 'postback',
      title: '🤖 Main Menu',
      payload: 'PERSISTENT_MENU_MAIN_MENU',
    },
    {
      type: 'postback',
      title: '✍️ Register',
      payload: 'REGISTER',
    },
    {
      type: 'web_url',
      title: '🌐 Go to Website',
      url: 'http://ictexpoethiopia.com',
    },
  ]);
};
