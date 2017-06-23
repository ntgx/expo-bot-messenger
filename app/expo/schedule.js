const jsonfile = require('jsonfile');

module.exports = (chat, time, day) => {
  jsonfile.readFile('./data/schedule.json', (err, programs) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    const cards = programs[day][time].map(program => ({
      title: program.title,
      subtitle: `${program.time} ${program.venue ? `(${program.venue})` : ''}`,
      image_url: program.pic,
      buttons: [{
        type: 'postback',
        title: '📢 Remind Me',
        payload: 'SET_REMINDER',
      }],
    }));
    chat.sendGenericTemplate(cards);
  });
};
