import React from "react";
import "./Signup.css"; // modal-overlay2 / modal-box2 styles

const Signup = ({ open, onClose, openLogin }) => {
  if (!open) return null;

  const handleSignup = (e) => {
    e.preventDefault();
    onClose();    // Close signup modal
    openLogin();  // Open login modal
  };

  return (
    <div className="modal-overlay2" onClick={onClose}>
      <div className="modal-box2" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title2">Get started</h2>
        <p className="modal-subtitle2">
          Join 2,000+ companies scaling with MyAcc.
        </p>

        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input className="input2" placeholder="Jane Doe" required />

          <label>Email</label>
          <input className="input2" type="email" placeholder="jane@company.com" required />

          <label>Password</label>
          <input className="input2" type="password" placeholder="••••••••" required />

          <label>Company Name</label>
          <input className="input2" placeholder="Acme Corp" required />

          <label>Company Website</label>
          <input className="input2" type="url" placeholder="https://www.acme.com" />

          <label>Company Size</label>
          <select className="input2" required>
            <option value="">Select size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="500+">500+ employees</option>
          </select>

          <label>Job Role</label>
          <select className="input2" required>
            <option value="">Select your role</option>
            <option value="HR Manager">HR Manager</option>
            <option value="CEO/Founder">CEO/Founder</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="Other">Other</option>
          </select>

          <label>Phone Number</label>
          <input className="input2" type="tel" placeholder="+91 9876543210" />

          <button className="btn-primary2 full-width">Create Free Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
