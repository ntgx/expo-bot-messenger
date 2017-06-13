module.exports = (chat) => {
  const cards = [
    {
      title: 'Exhibitors',
      subtitle: 'Get info on all the exhibitors at the expo',
      image_url: 'https://i.imgur.com/U2k7ezr.png',
      buttons: [{
        type: 'postback',
        title: '🌐 Software',
        payload: 'EXHIBITORS: 1, 0',
      }, {
        type: 'postback',
        title: '🕹 Hardware',
        payload: 'EXHIBITORS: 2, 0',
      }, {
        type: 'postback',
        title: '👉🏾 More',
        payload: 'EXHIBITOR_CATEGORIES',
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
        payload: 'REGISTER',
      }, {
        type: 'postback',
        title: '❓ Ask me anything!',
        payload: 'ASK',
      }],
    },
  ];
  chat.sendGenericTemplate(cards);
};
