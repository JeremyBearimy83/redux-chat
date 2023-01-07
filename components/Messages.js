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

  if (currentChatId === 0) return <div>No chat selected</div>;

  useEffect(() => {
    scrollToLastMessage();
  });

  if (!allMessages[currentChatId]?.length) {
    return (
      <div className="no-messages">
        <span>No messages</span>
      </div>
    );
  }

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
