import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import Messages from './Messages';
import TypeMessage from './TypeMessage';
import UsersList from './UsersList';

import { Message } from '../../shared/interfaces';

const App = (props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState('');
  const socketRef = useRef(io());
  const messagesRef = useRef(messages);

  useEffect(() => {
    socketRef.current.on('chat message', (msg: Message) => {
      messagesRef.current.push(msg);
      setMessages([...messagesRef.current]);
    });

    socketRef.current.on('username', (username) => setUsername(username));

    return () => {
      socketRef.current.offAny();
    };
  }, []);

  const sendMessage = (msg: Message) => {
    socketRef.current.emit('chat message', msg);
  };

  return (
    <div>
      <UsersList />
      <Messages messages={messages} />
      <TypeMessage username={username} sendMessage={sendMessage} />
    </div>
  );
};

export default App;
