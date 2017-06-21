const jsonfile = require('jsonfile');

module.exports = (chat) => {
  jsonfile.readFile('./data/events.json', (err, events) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }

    const cards = events.map(event => ({
      title: event.title,
      subtitle: event.desc,
      image_url: event.pic,
      buttons: [{
        type: 'postback',
        title: '📢 Remind Me',
        payload: 'SET_REMINDER',
      }],
    }));

    chat.sendGenericTemplate(cards);
  });
};
