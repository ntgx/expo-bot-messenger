module.exports = (chat) => {
  const days = ['Wednesday, June 28', 'Thursday, June 29', 'Friday, June 30', 'Saturday, July 1', 'Sunday, July 2'];
  const cards = days.map((day, index) => {
    return {
      title: `Day ${index + 1}`,
      subtitle: day,
      image_url: 'https://i.imgur.com/U2k7ezr.png',
      buttons: [{
        type: 'postback',
        title: '🕘 Morning',
        payload: 'SCHEDULE',
      }, {
        type: 'postback',
        title: '🕐 Afternoon',
        payload: 'SCHEDULE',
      }],
    };
  });
  chat.sendGenericTemplate(cards);
};
