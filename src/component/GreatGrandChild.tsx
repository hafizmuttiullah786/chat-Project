import React from "react";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const GreatGrandChild = () => {
  const message = useContext(MessageContext);

  return (
    <div className="great-grand-child">
      <p style={{ fontSize: "17px", fontWeight: "700" }}>{message}</p>
    </div>
  );
};

export default GreatGrandChild;
