const sendSummary = (convo) => {
  convo.getUserProfile().then((user) => {
    convo.say({
      text: `Ok ${user.first_name}, here's what you told me about you: \n- Interest Areas: ${convo.get('interest')} \n- Phone Number: ${convo.get('phone')}`,
      quickReplies: [
        { content_type: 'text', title: 'Looks good!', payload: '' },
        { content_type: 'text', title: 'Try Again', payload: '' },
      ],
    });
    convo.end();
    // TODO save to db
  });
};

const askPhone = (convo) => {
  convo.ask('What\'s your phone number?', (payload, conv) => {
    const text = payload.message.text;
    conv.set('phone', text);
    sendSummary(conv);
  });
};

const askInterests = (convo) => {
  convo.ask('What are your interest areas?', (payload, conv) => {
    const text = payload.message.text;
    conv.set('interest', text);
    askPhone(conv);
  });
};

module.exports = (chat) => {
  chat.conversation((convo) => {
    askInterests(convo);
  });
};
