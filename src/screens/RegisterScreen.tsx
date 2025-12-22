/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
import Register from "../component/Register";
import { Navigate } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [phoneno, setPhoneNo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>();
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>();
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const signup = async (e: any) => {
    e.preventDefault();
    const emptyFields: string[] = [];
    if (!name) emptyFields.push("Name");
    if (!email) emptyFields.push("Email");
    if (!password) emptyFields.push("Password");
    if (!confirm) emptyFields.push("Confirm Password");
    if (!username) emptyFields.push("user name");
    if (!phoneno) emptyFields.push("phone no");
    if (emptyFields.length > 0) {
      setError(`please filled the  ${emptyFields} field`);
      return;
    }
    if (password !== confirm) {
      setError("password and confitm password is not matching!!");
      return;
    }
    setLoader(true);
    setError("");
    try {
      const response = await fetch("https://api.connectycube.com/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "CB-Token": (globalThis as any).authToken || "",
        },
        body: JSON.stringify({
          user: {
            login: username,
            password: password,
            full_name: name,
            email: email,
            phone: phoneno,
          },
        }),
      });
      const result = await response.json();
      console.log("result aa gay:", result);
      if (response.ok) {
        setLoader(false);
        navigate("/login");
      } else {
        console.error("❌ Registration failed:", result);
        let errorMessage;
        if (result.errors && typeof result.errors === "object") {
          errorMessage = Object.values(result.errors).flat().join("\n");
        } else {
          errorMessage = result.errors || "Registration failed!";
        }
        alert(errorMessage);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <Register
        signup={signup}
        showPassword={showPassword}
        name={name}
        username={username}
        phoneno={phoneno}
        email={email}
        password={password}
        confirm={confirm}
        showConfirmPassword={showConfirmPassword}
        error={error}
        setName={setName}
        setUserName={setUserName}
        setPhoneNo={setPhoneNo}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirm={setConfirm}
        setShowConfirmPassword={setShowConfirmPassword}
        setShowPassword={setShowPassword}
      />
    </>
  );
};

export default RegisterScreen;
