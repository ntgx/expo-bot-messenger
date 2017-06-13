module.exports = (chat) => {
  chat.sendGenericTemplate([
    { title: 'Software', subtitle: 'Local & International companies doing cutting edge stuff in software', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: 'EXHIBITORS: 1, 0' }] },
    { title: 'Hardware', subtitle: 'Some of the biggest hardware makers', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: 'EXHIBITORS: 2, 0' }] },
    { title: 'Service', subtitle: 'The most innovative service providers', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: 'EXHIBITORS: 3, 0' }] },
    { title: 'Government', subtitle: 'E-Government', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: 'EXHIBITORS: 4, 0' }] },
    { title: 'Academia', subtitle: 'The companies and universities teaching technology', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: 'EXHIBITORS: 5, 0' }] },
    { title: 'SME & Startup', subtitle: 'Small & Medium Enterprises, Startups, Incubators etc..', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: 'EXHIBITORS: 6, 0' }] },
  ]);
};
