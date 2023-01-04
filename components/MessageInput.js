/* eslint-disable comma-dangle */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormState from "../hooks/useFormState";
import { messagesActions } from "../store/messages-slice";

const MessageInput = () => {
  const [messageText, handleMessageChange, handleMessageReset] = useFormState();
  const currentChatId = useSelector((state) => state.chats.currentChatId);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!messageText) return;
    dispatch(
      messagesActions.addMessage({ messageText, chatId: currentChatId })
    );
    handleMessageReset();
  };

  return (
    <div className="message-input-section">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={messageText}
          onChange={handleMessageChange}
          className="message-input"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageInput;
