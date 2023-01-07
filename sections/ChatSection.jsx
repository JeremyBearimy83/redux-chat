import React from "react";
import Chats from "../components/Chats";
import ChatTopBar from "../components/ChatTopBar";

const ChatSection = () => (
  <div className="chat-section">
    <ChatTopBar />
    <Chats />
  </div>
);
export default ChatSection;
