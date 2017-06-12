const sendSummary = (convo) => {
  convo.ask((conv) => {
    convo.getUserProfile().then((user) => {
      const quickReplies = [
        { content_type: 'text', title: 'Looks good!', payload: 'LOOKS_GOOD' },
        { content_type: 'text', title: 'Again', payload: 'AGAIN' },
      ];
      conv.sendTextMessage(`Ok ${user.first_name}, here's what you told me about you\n- Interest Areas: ${convo.get('interest')} \n- Phone Number: ${convo.get('phone')}`, quickReplies);
    });
  }, (payload) => {
    console.log('answer', payload);
  }, [
    {
      event: 'quick_reply:AGAIN',
      callback: () => {
        // TODO start registration convo again
        convo.say('ok again');
        convo.end();
      },
    },
    {
      event: 'quick_reply:LOOKS_GOOD',
      callback: () => {
        // TODO save to db
        convo.say('registered! thank you, i\'ll notify you here if you win!');
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
