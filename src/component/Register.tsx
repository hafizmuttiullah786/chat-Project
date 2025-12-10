/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Register = () => {
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
    <div className="register-wrapper">
      <form
        className="register-card"
        onSubmit={signup}
        style={{ width: "100%", maxWidth: "45%" }}
      >
        <h2>Create Account ✨</h2>
        <p className="register-subtitle">Join us and get started</p>

        <div className="d-flex">
          <div className="form-group" style={{ width: "100%" }}>
            <label>Full Name</label>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group" style={{ width: "100%" }}>
            <label>User Name</label>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Enter your user name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="form-group" style={{ width: "100%" }}>
            <label>Phone No</label>
            <input
              maxLength={11}
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter your user name"
              value={phoneno}
              onChange={(e) => setPhoneNo(e.target.value.slice(0, 11))}
            />
          </div>

          <div className="form-group" style={{ width: "100%" }}>
            <label>Email</label>
            <input
              style={{ width: "100%" }}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="form-group" style={{ width: "100%" }}>
            <label>Password</label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <i
                  className="ri-eye-line"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    cursor: "pointer",
                    transform: "translateY(-50%)",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              ) : (
                <>
                  <i
                    className="ri-eye-off-line"
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "50%",
                      cursor: "pointer",
                      transform: "translateY(-50%)",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </>
              )}
            </div>
          </div>
          <div className="form-group" style={{ width: "100%" }}>
            <label>Confirm Password</label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              {showConfirmPassword ? (
                <i
                  className="ri-eye-line"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    cursor: "pointer",
                    transform: "translateY(-50%)",
                  }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              ) : (
                <>
                  <i
                    className="ri-eye-off-line"
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "50%",
                      cursor: "pointer",
                      transform: "translateY(-50%)",
                    }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  ></i>
                </>
              )}
            </div>
          </div>
        </div>
        {error && (
          <p
            style={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: "700",
              textAlign: "center",
              margin: "10px 0px",
              borderRadius: "12px",
              textTransform: "capitalize",
            }}
          >
            {error}
          </p>
        )}

        <button type="submit" className="register-btn">
          Register
        </button>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
