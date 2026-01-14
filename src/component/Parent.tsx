/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "../styles/Chat.css";
import Child from "./Child";
import { MessageContext } from "../context/MessageContext";
import { getSessionToken } from "../services/authService";

const Parent = () => {
  const [message, setMessage] = useState("Please Update a Message");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = await getSessionToken();
    if (!token) return;
    try {
      const response = await fetch("https://api.connectycube.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "JSON",
          "CB-Token": (globalThis as any).authToken || "",
        },
      });

      const userData = await response.json();
      setUsers(userData.items);
      console.log("yeah hai user data::", userData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const update = () => {
    setMessage("you are successfully updated the message");
  };
  return (
    <>
      <MessageContext.Provider value={{ message, users }}>
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
