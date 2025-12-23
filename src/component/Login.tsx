/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
type LoginProps = {
  email?: string;
  password: string;
  setEmail: (e: string) => void;
  setPassword: (e: string) => void;
  errorMsg?: string;
  loader?: boolean;
  apiErrMsg?: string;
  showModal?: boolean;
  closeModal: () => void;
  LoginNow?: (e:any) => void;
};
const Login = (props: LoginProps) => {
  return (
    <>
      {props.apiErrMsg && (
        <Modal show={props.showModal} centered>
          <div className="close--modal" onClick={props.closeModal}>
            <i className="ri-close-circle-line"></i>
          </div>
          <Modal.Body>
            <i className="ri-error-warning-line"></i>
            <p className="apierrorMsg">{props.apiErrMsg}</p>
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
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </div>
          {props.errorMsg && <p style={{ color: "#fff" }}>{props.errorMsg}</p>}

          <button type="submit" className="login-btn" onClick={props.LoginNow}>
            {props.loader ? (
              <div className="loader"></div>
            ) : (
              <span> Login</span>
            )}
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
