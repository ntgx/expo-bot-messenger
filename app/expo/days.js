module.exports = (chat) => {
  const days = ['Wednesday, June 28', 'Thursday, June 29', 'Friday, June 30', 'Saturday, July 1', 'Sunday, July 2'];
  const cards = days.map((day, index) => ({
    title: `Day ${index + 1}`,
    subtitle: day,
    image_url: 'https://i.imgur.com/2OkLsCy.png',
    buttons: [{
      type: 'postback',
      title: '🕘 Morning',
      payload: JSON.stringify({ type: 'schedule', time: 'MORNING', day: index }),
    }, {
      type: 'postback',
      title: '🕐 Afternoon',
      payload: JSON.stringify({ type: 'schedule', time: 'AFTERNOON', day: index }),
    }],
  }));
  chat.sendGenericTemplate(cards);
};
