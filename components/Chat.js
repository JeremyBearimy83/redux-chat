/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import { useSelector } from "react-redux";

const Chat = ({ chatId, name, handleChatChange }) => {
  const localMessages = useSelector((state) => state.messages.messages)[chatId];
  let lastMessage = "";
  if (localMessages) {
    lastMessage = localMessages[localMessages.length - 1];
  }
  return (
    <div onClick={() => handleChatChange(chatId)} role="button">
      <span>{name}</span>

      {lastMessage && <span>({lastMessage.messageText})</span>}
    </div>
  );
};

export default Chat;
