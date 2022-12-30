import { configureStore } from "@reduxjs/toolkit";
import chatsSlice from "./chats-slice";
import messagesSlice from "./messages-slice";

const store = configureStore({
  reducer: {
    chats: chatsSlice.reducer,
    messages: messagesSlice.reducer,
  },
});

export default store;
