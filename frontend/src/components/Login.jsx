import React from "react";
import { useNavigate } from "react-router-dom"; // React Router hook
import "./Login.css";

const Login = ({ open, onClose, openSignup }) => {
  const navigate = useNavigate(); // hook to navigate

  if (!open) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can do your API login validation if needed
    onClose();           // Close login modal
    navigate("/dashboard"); // Navigate to dashboard
  };

  return (
    <div className="modal-overlay1" onClick={onClose}>
      <div className="modal-box1" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title1">Welcome back</h2>
        <p className="modal-subtitle1">
          Login to continue managing payroll.
        </p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input className="input1" type="email" placeholder="you@company.com" required />

          <label>Password</label>
          <input className="input1" type="password" placeholder="••••••••" required />

          <button className="btn-primary1 full-width">Login</button>
        </form>

        <p style={{ marginTop: "12px", textAlign: "center", fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <button className="btn-link1" onClick={openSignup}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
