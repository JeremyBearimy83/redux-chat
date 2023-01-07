/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import React from "react";
import { useSelector } from "react-redux";

const MessageTopBar = () => {
  const { chats: allChats, currentChatId } = useSelector((state) => state);

  const currentChat =
    allChats.archivedChats.find((ac) => ac.chatId === allChats.currentChatId) ||
    allChats.chats.find((c) => c.chatId === allChats.currentChatId);

  if (currentChatId === 0) return <div>No chat selected</div>;

  if (!currentChat) {
    return <div className="message-top-bar">No Chat Selected</div>;
  }

  return <div className="message-top-bar">{currentChat.name}</div>;
};

export default MessageTopBar;
