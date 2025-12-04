/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {getSessionToken} from "../services/authService"
const UsersList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  const usersList = async () => {
     const token = await getSessionToken();
     if (!token) return;
    try {
      const response = await fetch("https://api.connectycube.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "CB-Token": (globalThis as any).authToken || "",
        },
      });
      const result = await response.json();
      setUsers(result.items || []);
      console.log("User list ka data!!!!!", result);
    } catch (error) {
      console.log("error::", error);
    }
  };

  // Run API call when component mounts
  useEffect(() => {
    usersList();
  }, []);

  return (
    <div className="users--list--page py-5">
      <h2 className="main--heading mb-3">List of All Users</h2>
      <div className="cards-container">
        {users.map((item: any, index: number) => (
          <div className="user-card" key={index}>
            <p>
              <strong>User Email:</strong>
              <br /> {item.user?.email || "—"}
            </p>
            <p>
              <strong>username Name:</strong>
              <br /> {item.user?.login || "—"}
            </p>
            <p>
              <strong>updated_at</strong>
              <br /> {item.user?.updated_at || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
