import React from "react";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const GreatGrandChild = () => {
  const value = useContext(MessageContext);

  return (
    <div className="great-grand-child flex-column d-flex">
      {value.users.map((u, i) => (
        <p key={i}>{u.user.email || "Not Found"}</p>
      ))}
      <p style={{ fontSize: "17px", fontWeight: "700", marginBottom:"0px" }}>{value.message}</p>
    </div>
  );
};

export default GreatGrandChild;
