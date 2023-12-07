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
