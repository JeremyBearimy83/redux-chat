import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MessageBox from "./MessageBox";

const Messages = () => {
  const allMessages = useSelector((state) => state.messages.messages);
  const currentChatId = useSelector((state) => state.chats.currentChatId);

  const lastMessageRef = useRef(null);

  const scrollToLastMessage = () => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log("look at current chatId", currentChatId);

  if (currentChatId === 0) return <div>No chat selected</div>;

  // if (!allMessages[currentChatId]) {
  //   return <div ref={lastMessageRef}>NO MESSAGES</div>;
  // }

  useEffect(() => {
    scrollToLastMessage();
  });

  return (
    <div className="message-list">
      {allMessages[currentChatId]?.map((m) => (
        <MessageBox key={m.messageId} messageText={m.messageText} />
      ))}
      <div ref={lastMessageRef} />
    </div>
  );
};

export default Messages;
