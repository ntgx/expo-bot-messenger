const sendSummary = (convo) => {
  convo.ask((conv) => {
    convo.getUserProfile().then((user) => {
      const quickReplies = [
        { content_type: 'text', title: 'Register', payload: 'REGISTER' },
        { content_type: 'text', title: 'Never mind', payload: 'END' },
      ];
      conv.sendTextMessage(`Ok ${user.first_name}, here's what you told me about you\n- Interest Areas: ${convo.get('interest')} \n- Phone Number: ${convo.get('phone')}`, quickReplies);
    });
  }, (payload) => {
    console.log('answer', payload);
  }, [
    {
      event: 'quick_reply:END',
      callback: () => {
        convo.say('Cool, just tap on register again if you change your mind 😉');
        convo.end();
      },
    },
    {
      event: 'quick_reply:REGISTER',
      callback: () => {
        // TODO save to db
        convo.say('registered for lotto! i\'ll notify you here if you win!');
        // send gif money raining
        convo.end();
      },
    },
  ]);
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
