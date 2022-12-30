/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const messagesSlice = createSlice({
  name: "messages",
  initialState: { messages: {} },
  reducers: {
    replaceMessages(state, action) {
      state.messages = action.payload;
      console.log("hi i am state", state.messages);
    },
    addMessage(state, action) {
      const { chatId, messageText } = action.payload;

      const newMessage = { chatId, messageText, messageId: uuid() };

      if (!state.messages[chatId]) {
        state.messages[chatId] = [newMessage];
      } else {
        state.messages[chatId].push(newMessage);
      }
    },
  },
});

export const messagesActions = messagesSlice.actions;

export default messagesSlice;
