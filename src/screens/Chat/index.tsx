import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export const ChatScreen: React.VFC = () => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello developer2',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      placeholder="メッセージを送ろう"
      alwaysShowSend
    />
  );
};
