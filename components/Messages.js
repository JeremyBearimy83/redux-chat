import React from "react";
import { useSelector } from "react-redux";

const Messages = () => {
  const allMessages = useSelector((state) => state.messages.messages);
  const currentChatId = useSelector((state) => state.chats.currentChatId);

  console.log("look at current chatId", currentChatId);

  if (currentChatId === 0) return <div>No chat selected</div>;

  if (!allMessages[currentChatId]) {
    return <div>NO MESSAGES</div>;
  }

  return (
    <div>
      {allMessages[currentChatId].map((m) => (
        <div key={m.messageId}>{m.messageText}</div>
      ))}
    </div>
  );
};

export default Messages;
