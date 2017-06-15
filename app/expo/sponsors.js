const jsonfile = require('jsonfile');

module.exports = (chat, type) => {
  jsonfile.readFile('./data/sponsors.json', (err, sponsors) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    const sponsorsInCat = sponsors.filter(sponsor => sponsor.type === type);
    const cards = sponsorsInCat.map((sponsor) => {
      return {
        title: sponsor.name,
        subtitle: sponsor.subtitle,
        image_url: sponsor.logo,
        buttons: [{
          type: 'web_url',
          title: '🌐 View Website',
          url: sponsor.url,
        }],
      };
    });

    chat.sendGenericTemplate(cards);
  });
};
