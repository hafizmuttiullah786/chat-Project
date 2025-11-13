/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>();
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>();
  const navigate = useNavigate();

  const signup = async (e: any) => {
    e.preventDefault();
    const emptyFields: string[] = [];
    if (!name) emptyFields.push("Name");
    if (!email) emptyFields.push("Email");
    if (!password) emptyFields.push("Password");
    if (!confirm) emptyFields.push("Confirm Password");
    if (emptyFields.length > 0) {
      setError(`please filled the  ${emptyFields}`);
      return;
    }
    if (password !== confirm) {
      setError("password and confitm password is not matching!!");
      return;
    }
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
            login: email,
            password: password,
            full_name: name,
          },
        }),
      });
      const result = await response.json();
      console.log("result aa gay:", result);
      if (response.ok) {
        navigate("/login");
        alert("user register successfully!!!");
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

  return (
    <div className="register-wrapper">
      <form className="register-card" onSubmit={signup}>
        <h2>Create Account ✨</h2>
        <p className="register-subtitle">Join us and get started</p>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div style={{ position: "relative" }}>
            <input
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

        <div className="form-group">
          <label>Confirm Password</label>
          <div style={{ position: "relative" }}>
            <input
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
        {error && (
          <p
            style={{
              color: "#991717",
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
