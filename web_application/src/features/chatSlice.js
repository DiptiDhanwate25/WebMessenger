//import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user1: { messages: [] },
//   user2: { messages: [] },
// };

// const chatSlice = createSlice({
//   name: 'chat',
//   initialState,
//   reducers: {
//     sendMessage: (state, action) => {
//       const { message, username } = action.payload;
//       const messageObject = { text: `${username}: ${message}`, sentBy: username };

//       // Push the message to the sender's chat
//       state[username].messages.push(messageObject);

//       // Push the message to the other user's chat
//       const otherUser = username === 'user1' ? 'user2' : 'user1';
//       state[otherUser].messages.push(messageObject);
//     },
//   },
// });

// export const { sendMessage } = chatSlice.actions;
// export default chatSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const { message, username } = action.payload;
      const messageObject = { text: `${username}: ${message}`, sentBy: username };
      
      // Push the message to the messages array
      state.messages.push(messageObject);
    },
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
