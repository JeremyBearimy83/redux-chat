/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chats-slice";
import Chat from "./Chat";

const Chats = () => {
  const { chats: allChats } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChatChange = (chatId) => {
    dispatch(chatActions.changeCurrentChat(chatId));
  };

  return (
    <div>
      <div className="all-chats">
        {allChats.archivedChats.map((c) => (
          <Chat
            handleChatChange={handleChatChange}
            key={c.chatId}
            name={c.name}
            chatId={c.chatId}
            selectedChat={c.chatId === allChats.currentChatId}
          />
        ))}
        {allChats.chats.map((c) => (
          <Chat
            handleChatChange={handleChatChange}
            key={c.chatId}
            name={c.name}
            chatId={c.chatId}
            selectedChat={c.chatId === allChats.currentChatId}
          />
        ))}
      </div>
    </div>
  );
};

export default Chats;
