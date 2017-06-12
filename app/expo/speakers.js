const jsonfile = require('jsonfile');

module.exports = (chat) => {
  jsonfile.readFile('./data/speakers.json', (err, speakers) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }

    const cards = speakers.map((speaker) => {
      return {
        title: speaker.name,
        subtitle: speaker.bio,
        image_url: speaker.pic,
        buttons: [{
          type: 'postback',
          title: '⭐️ Rate Talk',
          payload: 'RATE',
        }, {
          type: 'web_url',
          title: '🌐 Learn More',
          url: 'http://ictexpoethiopia.com', // TODO replace with speaker.url if data is available
        }],
      };
    });

    chat.sendGenericTemplate(cards);
  });
};
