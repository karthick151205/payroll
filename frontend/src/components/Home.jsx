import React, { useState } from "react";
import "./Home.css";

/* ===================== SIGNUP MODAL ===================== */
const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    onClose();
  };

  return (
    <div className="signup-modal" onClick={onClose}>
      <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Advanced Registration</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />

          <label>Company Name</label>
          <input type="text" placeholder="Your Company Name" required />

          <label>Company Email</label>
          <input type="email" placeholder="company@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="********" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="+91 9876543210" required />

          <label>Industry Type</label>
          <select required>
            <option value="">Select Industry</option>
            <option>IT / Software</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Retail</option>
            <option>Other</option>
          </select>

          <label>Company Size</label>
          <select required>
            <option value="">Select Size</option>
            <option>1-10 Employees</option>
            <option>11-50 Employees</option>
            <option>51-200 Employees</option>
            <option>201-500 Employees</option>
            <option>500+ Employees</option>
          </select>

          <button className="primary-btn neon-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

/* ===================== LOGIN MODAL ===================== */
const LoginModal = ({ isOpen, onClose, openForgot }) => {
  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    onClose();
  };

  return (
    <div className="signup-modal" onClick={onClose}>
      <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="company@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="********" required />

          <button className="primary-btn neon-btn">Login</button>

          <p className="link-text" onClick={openForgot}>
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

/* ===================== FORGOT PASSWORD ===================== */
const ForgotPasswordModal = ({ isOpen, onClose, openReset }) => {
  if (!isOpen) return null;

  const handleForgot = (e) => {
    e.preventDefault();
    alert("OTP sent to email!");
    onClose();
    openReset();
  };

  return (
    <div className="signup-modal" onClick={onClose}>
      <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Forgot Password</h2>

        <form onSubmit={handleForgot}>
          <label>Registered Email</label>
          <input type="email" placeholder="company@example.com" required />

          <button className="primary-btn neon-btn">Send OTP</button>
        </form>
      </div>
    </div>
  );
};

/* ===================== RESET PASSWORD ===================== */
const ResetPasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password Reset Successful!");
    onClose();
  };

  return (
    <div className="signup-modal" onClick={onClose}>
      <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Reset Password</h2>

        <form onSubmit={handleReset}>
          <label>OTP</label>
          <input type="text" placeholder="Enter OTP" required />

          <label>New Password</label>
          <input type="password" placeholder="********" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="********" required />

          <button className="primary-btn neon-btn">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

/* ===================== HOME ===================== */
const Home = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);

  return (
    <div className="home">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo neon-text">MyAcc</div>

        <nav>
          <ul className="nav-menu">
            <li>Platform</li>
            <li>Payroll</li>
            <li>Employees</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="nav-btn neon-btn" onClick={() => setIsSignupOpen(true)}>
            Sign Up
          </button>
          <button className="nav-btn outline" onClick={() => setIsLoginOpen(true)}>
            Login
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="neon-text">
            Intelligent Payroll <br /> & Workforce Management
          </h1>

          <p>
            MyAcc is an advanced payroll automation platform designed to manage
            employee records, salary structures, tax calculations, attendance,
            and secure payroll processing for modern organizations.
          </p>

          <div className="hero-tags">
            <span>Payroll Automation</span>
            <span>Employee Records</span>
            <span>Salary Processing</span>
            <span>Secure Access</span>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn neon-btn">Start Free Trial</button>
            <button className="secondary-btn neon-outline-btn">Request Demo</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-shape floating"></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 MyAcc — Smart Payroll, Smarter Workforce</p>
      </footer>

      {/* MODALS */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        openForgot={() => {
          setIsLoginOpen(false);
          setIsForgotOpen(true);
        }}
      />
      <ForgotPasswordModal
        isOpen={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
        openReset={() => setIsResetOpen(true)}
      />
      <ResetPasswordModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
      />

    </div>
  );
};

export default Home;
