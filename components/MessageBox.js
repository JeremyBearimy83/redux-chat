import React from "react";

const MessageBox = ({ messageText }) => (
  <div className="message talk-bubble tri-right round border right-top">
    <div className="talktext">
      <p>{messageText}</p>
    </div>
  </div>
);

export default MessageBox;
