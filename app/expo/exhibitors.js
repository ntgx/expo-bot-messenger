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
    const cards = exhibitorsForPage.map(exhibitor => ({
      title: exhibitor.name,
      subtitle: `Booth Numbers on Floor Plan: ${exhibitor.booth_numbers}`,
      image_url: exhibitor.logo,
      buttons: [{
        type: 'web_url',
        title: '🌐 Visit Website',
        url: 'http://ictexpoethiopia.com', // TODO replace with exhibitor.url after data is collected
      },
      {
        type: 'phone_number',
        title: '📞 Call',
        payload: '+251913183582', // TODO replace with exhibitor.tel after data is collected
      }],
    }));

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
