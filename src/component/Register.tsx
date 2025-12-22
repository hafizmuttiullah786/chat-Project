/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
type RegisterProps = {
  signup: (e: any) => Promise<void>;
  showPassword?: boolean;
  showConfirmPassword?: boolean;
  name?: string;
  username?: string;
  phoneno?: string;
  email?: string;
  password?: string;
  confirm?: string;
  error?: string;
  setName: (q: string) => void;
  setUserName: (q: string) => void;
  setEmail: (q: string) => void;
  setPhoneNo: (e: string) => void;
  setPassword: (e: string) => void;
  setConfirm: (e: string) => void;
  setShowConfirmPassword: (e: boolean) => void;
  setShowPassword: (e: boolean) => void;
};

const Register = (props: RegisterProps) => {
  return (
    <div className="register-wrapper">
      <form
        className="register-card"
        onSubmit={props.signup}
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
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
            />
          </div>

          <div className="form-group" style={{ width: "100%" }}>
            <label>User Name</label>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Enter your user name"
              value={props.username}
              onChange={(e) => props.setUserName(e.target.value)}
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
              value={props.phoneno}
              onChange={(e) => props.setPhoneNo(e.target.value.slice(0, 11))}
            />
          </div>

          <div className="form-group" style={{ width: "100%" }}>
            <label>Email</label>
            <input
              style={{ width: "100%" }}
              type="email"
              placeholder="Enter your email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="form-group" style={{ width: "100%" }}>
            <label>Password</label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                type={props.showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
              />
              {props.showPassword ? (
                <i
                  className="ri-eye-line"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    cursor: "pointer",
                    transform: "translateY(-50%)",
                  }}
                  onClick={() => props.setShowPassword(!props.showPassword)}
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
                    onClick={() => props.setShowPassword(!props.showPassword)}
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
                type={props.showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={props.confirm}
                onChange={(e) => props.setConfirm(e.target.value)}
              />
              {props.showConfirmPassword ? (
                <i
                  className="ri-eye-line"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    cursor: "pointer",
                    transform: "translateY(-50%)",
                  }}
                  onClick={() =>
                    props.setShowConfirmPassword(!props.showConfirmPassword)
                  }
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
                    onClick={() =>
                      props.setShowConfirmPassword(!props.showConfirmPassword)
                    }
                  ></i>
                </>
              )}
            </div>
          </div>
        </div>
        {props.error && (
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
            {props.error}
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
