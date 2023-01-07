/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    archivedChats: [],
    chats: [],
    currentChatId: 1,
  },
  reducers: {
    changeCurrentChat(state, action) {
      state.currentChatId = action.payload;
    },
    replaceChats(state, action) {
      state.archivedChats = action.payload.archivedChats;
      state.chats = action.payload.chats;
    },
    addChat(state, action) {
      const { name, profilePic, lastMessage } = action.payload;
      const newChat = {
        name,
        profilePic,
        lastMessage,
        chatId: uuid(),
      };
      state.chats.push(newChat);
      state.currentChatId = newChat.chatId;
    },
    archiveChat(state, action) {
      const { chatId } = action.payload;
      const chatToBeArchived = state.find((c) => c.chatId === chatId);

      state.chats = state.chats.filter((c) => c.chatId !== chatId);
      state.archivedChats.push(chatToBeArchived);
    },
    deleteChat(state, action) {
      const { chatId } = action.payload;
      state.chats = state.chats.filter((c) => c.chatId !== chatId);
      state.archivedChats = state.archivedChats.filter(
        (c) => c.chatId !== chatId
      );
    },
  },
});

export const chatActions = chatsSlice.actions;
export default chatsSlice;
