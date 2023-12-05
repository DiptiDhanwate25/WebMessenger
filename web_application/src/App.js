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
          user="user1"
          messages={user1Messages}
          sendMessage={(message) => sendMessage(message, 'user1')}
        />
        <ChatSection
          user="user2"
          messages={user2Messages}
          sendMessage={(message) => sendMessage(message, 'user2')}
        />
      </div>
    </div>
  );
};

export default App;

