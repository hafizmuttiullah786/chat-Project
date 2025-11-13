/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, seterrorMsg] = useState("");
  const navigate = useNavigate();

  const Login = async (e: any) => {
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
    } else {
      seterrorMsg("");
    }
    try {
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
        localStorage.setItem("authToken", (globalThis as any).authToken || "");
        navigate("/");
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
      console.log(error);
    }
  };
  return (
    <div className="login-wrapper">
      <form className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue</p>

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
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMsg && <p>{errorMsg}</p>}

        <button type="submit" className="login-btn" onClick={Login}>
          Login
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
