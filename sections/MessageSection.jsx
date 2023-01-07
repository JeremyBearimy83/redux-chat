import React from "react";
import MessageInput from "../components/MessageInput";
import Messages from "../components/Messages";
import MessageTopBar from "../components/MessageTopBar";

const MessageSection = () => (
  <div className="message-section">
    <MessageTopBar />
    <Messages />
    <MessageInput />
  </div>
);

export default MessageSection;
