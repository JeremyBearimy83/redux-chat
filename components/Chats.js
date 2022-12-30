/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chats-slice";
import Chat from "./Chat";

const Chats = () => {
  const allChats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const handleChatChange = (chatId) => {
    dispatch(chatActions.changeCurrentChat(chatId));
  };

  return (
    <div>
      {allChats.archivedChats.map((c) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // <div
        //   onClick={() => handleChatChange(c.chatId)}
        //   key={c.chatId}
        //   role="button"
        // >
        //   {c.name}
        // </div>

        <Chat
          handleChatChange={handleChatChange}
          key={c.chatId}
          name={c.name}
          chatId={c.chatId}
        />
      ))}
      {allChats.chats.map((c) => (
        <Chat
          handleChatChange={handleChatChange}
          key={c.chatId}
          name={c.name}
          chatId={c.chatId}
        />
      ))}
    </div>
  );
};

export default Chats;
