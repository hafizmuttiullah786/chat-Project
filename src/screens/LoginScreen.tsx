/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Login from "../component/Login";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, seterrorMsg] = useState("");
  const [loader, setloader] = useState<boolean>(false);
  const [apiErrMsg, setApiErrMsg] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const LoginNow = async (e: any) => {
    e.preventDefault();
    const emptyfields = [];
    if (!password) {
      emptyfields.push("password");
    }
    if (!email) {
      emptyfields.push("email");
    }
    if (email == "" || password == "") {
      seterrorMsg(`please enter the value of ${emptyfields}`);
      return;
    } else {
      seterrorMsg("");
    }
    try {
      setloader(true);
      const response = await fetch("https://api.connectycube.com/login.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "CB-Token": (globalThis as any).authToken || "",
        },
        body: JSON.stringify({
          login: email,
          password: password,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setloader(false);
        localStorage.setItem("authToken", (globalThis as any).authToken || "");
        navigate("/", {
          state: {
            email: email,
          },
        });
      } else {
        console.error("❌ Registration failed:", result);
        let errorMessage;
        if (result.errors && typeof result.errors === "object") {
          errorMessage = Object.values(result.errors).flat().join("\n");
        } else {
          errorMessage = result.errors || "Registration failed!";
        }
        setloader(false);
        setApiErrMsg(errorMessage);
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        errorMsg={errorMsg}
        loader={loader}
        apiErrMsg={apiErrMsg}
        showModal={showModal}
        closeModal={closeModal}
        LoginNow={LoginNow}
      />
    </>
  );
};

export default LoginScreen;
