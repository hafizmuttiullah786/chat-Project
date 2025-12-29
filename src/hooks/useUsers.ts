/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getSessionToken } from "../services/authService";

export const useUSers = () => {
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

  return { users };
};
