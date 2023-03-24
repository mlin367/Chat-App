import React from 'react';

import { Message } from '../../shared/interfaces';

const Messages = (props: MessagesProps) => (
  <div>
    {props.messages &&
      props.messages.map(({ message, user, own }) => (
        <div>
          <p>{message}</p>
          <span>{user}</span>
        </div>
      ))}
  </div>
);

interface MessagesProps {
  messages: Message[];
}

export default Messages;
