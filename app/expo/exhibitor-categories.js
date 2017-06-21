module.exports = (chat) => {
  chat.sendGenericTemplate([
    { title: 'Software', subtitle: 'Local & International companies doing cutting edge stuff in software', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: JSON.stringify({ type: 'exhibitors', zone: 1 }) }] },
    { title: 'Hardware', subtitle: 'Some of the biggest hardware makers', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: JSON.stringify({ type: 'exhibitors', zone: 2 }) }] },
    { title: 'Service', subtitle: 'The most innovative service providers', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: JSON.stringify({ type: 'exhibitors', zone: 3 }) }] },
    { title: 'Government', subtitle: 'E-Government', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: JSON.stringify({ type: 'exhibitors', zone: 4 }) }] },
    { title: 'Academia', subtitle: 'The companies and universities teaching technology', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: JSON.stringify({ type: 'exhibitors', zone: 5 }) }] },
    { title: 'SME & Startup', subtitle: 'Small & Medium Enterprises, Startups, Incubators etc..', image_url: '', buttons: [{ type: 'postback', title: 'Show Me', payload: JSON.stringify({ type: 'exhibitors', zone: 6 }) }] },
  ]);
};
