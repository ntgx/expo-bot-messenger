const jsonfile = require('jsonfile');

module.exports = (chat, zone, startFrom = 0) => {
  jsonfile.readFile('./data/exhibitors.json', (err, exhibitors) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    const exhibitorsInZone = exhibitors.filter(e => e.zone === zone);
    const showMore = (startFrom + 9) < exhibitorsInZone.length;
    const exhibitorsForPage = exhibitorsInZone.splice(startFrom, 9);
    const cards = exhibitorsForPage.map((exhibitor) => {
      const card = {
        title: exhibitor.name,
        subtitle: `Booth Numbers on Floor Plan: ${exhibitor.booth_numbers}`,
        image_url: exhibitor.logo,
      };
      if (exhibitor.url || exhibitor.tel) card.buttons = [];
      if (exhibitor.url) {
        card.buttons.push({
          type: 'web_url',
          title: '🌐 Visit Website',
          url: exhibitor.url,
        });
      } if (exhibitor.tel) {
        card.buttons.push({
          type: 'phone_number',
          title: '📞 Call',
          payload: exhibitor.tel,
        });
      }
      return card;
    });

    const moreCard = {
      title: 'More',
      subtitle: 'Get more exhibitors from this category or view all of them on the website',
      image_url: '',
      buttons: [{
        type: 'postback',
        title: '✔️ Send More',
        payload: JSON.stringify({ type: 'exhibitors', zone, startFrom: startFrom + 9 }),
      }, {
        type: 'web_url',
        title: '🌐 View All',
        url: 'http://www.ictexpoethiopia.com/index.php/exhibitors/',
        webview_height_ratio: 'tall',
      }],
    };

    if (showMore) cards.push(moreCard);
    chat.sendGenericTemplate(cards);
  });
};
