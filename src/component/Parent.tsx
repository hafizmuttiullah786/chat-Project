/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "../styles/Chat.css";
import Child from "./Child";
import { MessageContext } from "../context/MessageContext";

const Parent = () => {
  const [message, setMessage] = useState("Please Update a Message");
  const update = () => {
    setMessage("you are successfully updated the message")
  };
  return (
    <>
      <MessageContext.Provider value={message}>
        <div className="center">
          <div className="Parent-comp">
            <p style={{ fontSize: "17px", fontWeight: "700" }}>
              Parent Component
            </p>
            <Child />
            <button className="d--btn" onClick={update}>
              Update
            </button>
          </div>
        </div>
      </MessageContext.Provider>
    </>
  );
};

export default Parent;
