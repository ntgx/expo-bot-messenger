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
      subtitle: 'Find out the daily schedule, speakers and various events at the expo',
      image_url: 'http://www.ictexpoethiopia.com/wp-content/uploads/2017/02/attend-new.jpg',
      buttons: [{
        type: 'postback',
        title: ' 📅 Daily Schedule',
        payload: 'DAILY_SCHEDULE',
      }, {
        type: 'postback',
        title: '🎟 Speakers',
        payload: 'SPEAKERS',
      }, {
        type: 'postback',
        title: '🎫 Events',
        payload: 'EVENTS',
      }],
    },
    {
      title: 'More',
      subtitle: 'Floor plan to help you find your way, register to win prizes and see sponsors',
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
        title: '💸 Sponsors',
        payload: 'SPONSORS',
      }],
    },
  ];
  chat.sendGenericTemplate(cards);
};
