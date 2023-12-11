import React, { useState } from 'react';
import ChatSection from './ChatSection';
import './App.css';

const App = () => {
  const [user1Messages, setUser1Messages] = useState([]);
  const [user2Messages, setUser2Messages] = useState([]);
  const [user1, setUser1] = useState(' ');
  const [user2, setUser2] = useState('');

  const sendMessage = (message, sender) => {
    const currentTime = new Date().toLocaleTimeString(); 

    const newMessage = {
      text: message,
      sender,
      time: currentTime, 
    };

    if (sender === user1) {
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
          user={user1}
          messages={user1Messages}
          sendMessage={(message) => sendMessage(message, user1)}
          setUser={(username) => setUser1(username)}
        />
        <ChatSection
          user={user2}
          messages={user2Messages}
          sendMessage={(message) => sendMessage(message, user2)}
          setUser={(username) => setUser2(username)}
        />
      </div>
    </div>
  );
};
 export default App;





// import React, { useState } from 'react';
// import ChatSection from './ChatSection';
// import './App.css';

// // Function to format time in 12-hour format with leading zeros
// const formatAMPM = (date) => {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12 || 12; // Handle midnight (0 hours)
//   hours = hours < 10 ? '0' + hours : hours; // Ensure hours have two digits
//   minutes = minutes < 10 ? '0' + minutes : minutes; // Ensure minutes have two digits
//   const strTime = hours + ':' + minutes + ' ' + ampm;
//   return strTime;
// };

// const App = () => {
//   const [user1Messages, setUser1Messages] = useState([]);
//   const [user2Messages, setUser2Messages] = useState([]);
//   const [user1, setUser1] = useState('User1');
//   const [user2, setUser2] = useState('User2');

//   const sendMessage = (message, sender) => {
//     const currentTime = formatAMPM(new Date());

//     const newMessage = {
//       text: message,
//       sender,
//       time: currentTime,
//     };

//     if (sender === user1) {
//       setUser1Messages([...user1Messages, newMessage]);
//       setUser2Messages([...user2Messages, newMessage]);
//     } else {
//       setUser2Messages([...user2Messages, newMessage]);
//       setUser1Messages([...user1Messages, newMessage]);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="chat-container">
//         <ChatSection
//           user={user1}
//           messages={user1Messages}
//           sendMessage={(message) => sendMessage(message, user1)}
//           setUser={(username) => setUser1(username)}
//         />
//         <ChatSection
//           user={user2}
//           messages={user2Messages}
//           sendMessage={(message) => sendMessage(message, user2)}
//           setUser={(username) => setUser2(username)}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;
