/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chats-slice";

const Chats = () => {
  const allChats = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  return (
    <div>
      {allChats.archivedChats.map((c) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          onClick={() => dispatch(chatActions.changeCurrentChat(c.chatId))}
          key={c.chatId}
          role="button"
        >
          {c.name}
        </div>
      ))}
      {allChats.chats.map((c) => (
        <div key={c.chatId}>{c.name}</div>
      ))}
    </div>
  );
};

export default Chats;
