/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chats-slice";
import Chat from "./Chat";
import NewChat from "./NewChat";

const Chats = () => {
  const { chats: allChats, currentChatId } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChatChange = (chatId) => {
    dispatch(chatActions.changeCurrentChat(chatId));
  };

  console.log({ allChats, currentChatId });

  return (
    <div>
      <div className="chat-heading">Chats</div>
      <div className="all-chats">
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
            selected={c.chatId === currentChatId}
          />
        ))}
        {allChats.chats.map((c) => (
          <Chat
            handleChatChange={handleChatChange}
            key={c.chatId}
            name={c.name}
            chatId={c.chatId}
            selected={c.chatId === currentChatId}
          />
        ))}
      </div>
    </div>
  );
};

export default Chats;
