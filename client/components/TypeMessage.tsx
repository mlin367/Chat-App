import React, { useState } from 'react';

import { Message } from '../../shared/interfaces';

const TypeMessage = ({ username, sendMessage }: TypeMessageProps) => {
  const [typed, setTyped] = useState('');

  return (
    <div>
      <input value={typed} onChange={(event) => setTyped(event.target.value)} />
      <button
        onClick={() =>
          sendMessage({ message: typed, user: username, own: false })
        }
      >
        SEND
      </button>
    </div>
  );
};

interface TypeMessageProps {
  username: string;
  sendMessage: (msg: Message) => void;
}

export default TypeMessage;
