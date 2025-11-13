/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { InitiateRoute } from "./Routes/InitiateRoute";
import "../src/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import { getSessionToken } from "./services/authService"; // 👈 adjust path as needed
function App() {
  (globalThis as any).authToken = null;

  useEffect(() => {
    getSessionToken().then((token) => {
      console.log("🔥 Token inside App.tsx:", token);
    });
  }, []);

  return (
    <>
      <InitiateRoute />
    </>
  );
}

export default App;
  
