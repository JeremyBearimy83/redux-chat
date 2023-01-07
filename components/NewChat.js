/* eslint-disable comma-dangle */
import React from "react";
import { useDispatch } from "react-redux";
import useFormState from "../hooks/useFormState";
import { chatActions } from "../store/chats-slice";

const NewChat = () => {
  const [chatName, handleChatName, ResetChatName] = useFormState("");

  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!chatName) return;

    dispatch(
      chatActions.addChat({ name: chatName, profilePic: "", lastMessage: "" })
    );

    ResetChatName();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="New Chat"
          value={chatName}
          onChange={handleChatName}
          className="chat-input"
        />
      </form>
    </div>
  );
};

export default NewChat;
