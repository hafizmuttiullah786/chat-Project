/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, seterrorMsg] = useState("");
  const [loader, setloader] = useState<boolean>(false);
  const [apiErrMsg, setApiErrMsg] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  }
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
        navigate("/");
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
      {apiErrMsg && (
        <Modal show={showModal} centered>
          <div className="close--modal" onClick={closeModal}>
            <i className="ri-close-circle-line"></i>
          </div>
          <Modal.Body>
            <i className="ri-error-warning-line"></i>
            <p className="apierrorMsg">{apiErrMsg}</p>
          </Modal.Body>
        </Modal>
      )}

      <div className="login-wrapper">
        <form className="login-card">
          <h2>Welcome Back 👋</h2>
          <p className="login-subtitle">Login to continue</p>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="email"
              placeholder="Enter User name"
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
          {errorMsg && <p style={{ color: "#fff" }}>{errorMsg}</p>}

          <button type="submit" className="login-btn" onClick={Login}>
            {loader ? <div className="loader"></div> : <span> Login</span>}
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
