const jsonfile = require('jsonfile');

module.exports = (chat, startFrom = 0) => {
  jsonfile.readFile('./data/speakers.json', (err, data) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    const showMore = (startFrom + 9) < data.length;
    const cards = data.splice(startFrom, 9).map(speaker => ({
      title: speaker.name,
      subtitle: speaker.bio,
      image_url: speaker.pic,
      buttons: [{
        type: 'web_url',
        title: '🌐 Learn More',
        url: 'http://ictexpoethiopia.com', // TODO replace with speaker.url if data is available
      }],
    }));

    const moreCard = {
      title: 'More',
      subtitle: 'Get more speakers or view all of them on the website',
      image_url: 'https://i.imgur.com/2OkLsCy.png',
      buttons: [{
        type: 'postback',
        title: '✔️ Send More',
        payload: JSON.stringify({ type: 'speakers', startFrom: startFrom + 9 }),
      }, {
        type: 'web_url',
        title: '🌐 View All',
        url: 'http://www.ictexpoethiopia.com/index.php/speakers/',
        webview_height_ratio: 'tall',
      }],
    };

    if (showMore) cards.push(moreCard);
    chat.sendGenericTemplate(cards);
  });
};
