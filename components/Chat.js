/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import { useSelector } from "react-redux";

const Chat = ({ chatId, name, handleChatChange, selectedChat }) => {
  const localMessages = useSelector((state) => state.messages.messages)[chatId];
  let lastMessage = "";
  if (localMessages) {
    lastMessage = localMessages[localMessages.length - 1];
  }
  return (
    <div
      className={`chat ${selectedChat && "selected-chat"}`}
      onClick={() => handleChatChange(chatId)}
      role="button"
    >
      <span className="chat-name">{name}</span>

      {lastMessage ? (
        <div className="last-message">
          {lastMessage.messageText?.substring(0, 55)}
          {lastMessage.messageText.length > 55 && <span>...</span>}
        </div>
      ) : (
        <div className="last-message"> Type to chat </div>
      )}
    </div>
  );
};

export default Chat;
