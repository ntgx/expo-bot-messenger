module.exports = (chat) => {
  chat.sendListTemplate([
    {
      title: 'Organizers',
      image_url: 'https://i.imgur.com/U2k7ezr.png',
      subtitle: 'Organized by MCIT & Facilitated by ICTET',
      buttons: [
        {
          type: 'postback',
          title: 'View',
          payload: 'VIEW_ORGANIZERS',
        }],
    },
    {
      title: 'Sponsors',
      image_url: 'http://michaelwmccarthyfoundation.org/wp-content/uploads/2015/08/sponsor-icon.png',
      subtitle: 'Platinum, Silver & Bronze',
      buttons: [
        {
          type: 'postback',
          title: 'View',
          payload: 'VIEW_SPONSORS',
        }],
    },
    {
      title: 'Official Carrier and Media Partner',
      image_url: 'https://s-media-cache-ak0.pinimg.com/originals/79/27/d3/7927d36e2b05125a79327c37610bcc4c.png',
      subtitle: 'Ethiopian Airlines, EBS TV',
      buttons: [
        {
          type: 'postback',
          title: 'View',
          payload: 'VIEW_CARRIER',
        }],
    },
    {
      title: 'Partners',
      image_url: 'http://www.folchurch.com/media/image/partner-icon2.png',
      subtitle: 'Oracle, Mastercard',
      buttons: [
        {
          type: 'postback',
          title: 'View',
          payload: 'VIEW_PARTNERS',
        }],
    },
  ]);
};
