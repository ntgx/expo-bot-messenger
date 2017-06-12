module.exports = (chat) => {
  const cards = [
    {
      title: 'Exhibitors',
      subtitle: 'Get info on all the exhibitors at the expo',
      image_url: 'https://i.imgur.com/U2k7ezr.png',
      buttons: [{
        type: 'postback',
        title: '🌐 Software',
        payload: 'SOFTWARE',
      }, {
        type: 'postback',
        title: '🕹 Hardware',
        payload: 'HARDWARE',
      }, {
        type: 'postback',
        title: '👉🏾 More',
        payload: 'MORE',
      }],
    },
    {
      title: 'Schedule',
      subtitle: 'The Schedule',
      image_url: 'https://i.imgur.com/U2k7ezr.png',
      buttons: [{
        type: 'postback',
        title: '📅 Daily Schedule',
        payload: 'DAILY_SCHEDULE',
      }, {
        type: 'postback',
        title: '🎟 Conference',
        payload: 'CONFERENCE',
      }, {
        type: 'postback',
        title: '🎫 Panels/Speakers',
        payload: 'SPEAKERS',
      }],
    },
    {
      title: 'Events',
      subtitle: 'Various events at the expo and in the city',
      image_url: 'https://i.imgur.com/U2k7ezr.png',
      buttons: [{
        type: 'postback',
        title: '🎤 Concerts',
        payload: 'CONCERTS',
      }, {
        type: 'postback',
        title: '🚀 Startup Prooduct Demos',
        payload: 'STARTUP_DEMOS',
      }, {
        type: 'postback',
        title: '📅 Other Events',
        payload: 'OTHER_EVENTS',
      }],
    },
    {
      title: 'Other',
      subtitle: 'More info',
      image_url: 'https://i.imgur.com/U2k7ezr.png',
      buttons: [{
        type: 'postback',
        title: '📜 Floor Plan',
        payload: 'FLOOR_PLAN',
      },
      {
        type: 'postback',
        title: '💰 Register for Lotto',
        payload: 'REGISTER_LOTTO',
      }, {
        type: 'postback',
        title: '❓ Ask me anything!',
        payload: 'ASK',
      }],
    },
  ];
  chat.sendGenericTemplate(cards);
};
