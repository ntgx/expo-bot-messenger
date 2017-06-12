module.exports = (bot) => {
  bot.on('message', (payload, chat, data) => {
    if (data.captured) { return; }
    const text = payload.message.text;
    console.log(text);
  });
};
