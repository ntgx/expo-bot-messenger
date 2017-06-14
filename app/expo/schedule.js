const jsonfile = require('jsonfile');

module.exports = (chat, time, day) => {
  jsonfile.readFile('./data/schedule.json', (err, programs) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    const cards = programs[day][time].map((program) => {
      return {
        title: program.title,
        subtitle: `${program.time} ${program.venue ? `(${program.venue})` : ''}`,
        image_url: program.pic,
        buttons: [{
          type: 'web_url',
          title: '🌐 See All',
          url: 'http://www.ictexpoethiopia.com/index.php/program/',
          webview_height_ratio: 'tall',
        }],
      };
    });
    chat.sendGenericTemplate(cards);
  });
};
