import React, { useState } from "react";
import "./Home.css";

// Advanced Signup Modal Component
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

          {/* Full Name */}
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            required
          />

          {/* Company Name */}
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Your Company Name"
            required
          />

          {/* Company Email */}
          <label htmlFor="companyEmail">Company Email</label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            placeholder="company@example.com"
            required
          />

          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
          />

          {/* Phone Number */}
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 9876543210"
            required
          />

          {/* Industry Type */}
          <label htmlFor="industry">Industry Type</label>
          <select id="industry" name="industry" required>
            <option value="">Select Industry</option>
            <option value="IT">IT / Software</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Retail">Retail</option>
            <option value="Other">Other</option>
          </select>

          {/* Company Size */}
          <label htmlFor="companySize">Company Size</label>
          <select id="companySize" name="companySize" required>
            <option value="">Select Size</option>
            <option value="1-10">1-10 Employees</option>
            <option value="11-50">11-50 Employees</option>
            <option value="51-200">51-200 Employees</option>
            <option value="201-500">201-500 Employees</option>
            <option value="500+">500+ Employees</option>
          </select>


          {/* Submit Button */}
          <button type="submit" className="primary-btn neon-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const Home = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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
          <button className="nav-btn outline">Login</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="neon-text">
            Intelligent Payroll <br />
            & Workforce Management
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

      {/* FEATURES */}
      <section className="features">
        <h2 className="neon-text">Why Choose MyAcc?</h2>

        <div className="feature-grid">
          <div className="feature-card neon-card">
            <h3>Employee Lifecycle</h3>
            <p>
              Maintain complete employee profiles including designation,
              department, joining date, and salary structure.
            </p>
          </div>

          <div className="feature-card neon-card">
            <h3>Payroll Accuracy</h3>
            <p>
              Automated salary calculation with allowances, deductions, tax,
              PF, and net pay generation.
            </p>
          </div>

          <div className="feature-card neon-card">
            <h3>Secure Authentication</h3>
            <p>
              Role-based login system for Admin, HR, and Employees with secure
              data isolation.
            </p>
          </div>

          <div className="feature-card neon-card">
            <h3>Reports & Insights</h3>
            <p>
              Generate monthly payroll reports, employee salary slips, and
              financial summaries instantly.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 MyAcc — Smart Payroll, Smarter Workforce</p>
      </footer>

      {/* SIGNUP MODAL */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </div>
  );
};

export default Home;
