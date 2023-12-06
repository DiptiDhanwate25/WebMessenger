import React, { useState } from 'react';
import ChatSection from './ChatSection';
import './App.css';

const App = () => {
  const [user1Messages, setUser1Messages] = useState([]);
  const [user2Messages, setUser2Messages] = useState([]);

  const sendMessage = (message, sender) => {

    const newMessage = { text: message, sender };

    if (sender === 'user1') {
      setUser1Messages([...user1Messages, newMessage]);
      setUser2Messages([...user2Messages, newMessage]);
    } else {
      setUser2Messages([...user2Messages, newMessage]);
      setUser1Messages([...user1Messages, newMessage]);
    }

  };

  return (
    <div className="app">
      <div className="chat-container">
        <ChatSection
          user="Nisha"
          messages={user1Messages}
          sendMessage={(message) => sendMessage(message,'Nisha')}
        />
        <ChatSection
          user="Arav"
          messages={user2Messages}
          sendMessage={(message) => sendMessage(message,'Arav')}
        />
      </div>
    </div>
  );
};

export default App;



