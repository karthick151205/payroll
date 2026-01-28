import React, { useState } from "react";
import "./Home.css";
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          MyAcc<span>.</span>
        </div>

        <ul className="nav-menu">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Resources</li>
        </ul>

        <div className="nav-actions">
          <button className="btn-primary" onClick={() => setLoginOpen(true)}>
            Login
          </button>

          <button className="btn-primary" onClick={() => setSignupOpen(true)}>
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Payroll that <br />
            <span>just works.</span>
          </h1>

          <p className="hero-desc">
            Automate payroll, compliance, and employee management with one
            powerful platform.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setSignupOpen(true)}>
              Start Free Trial
            </button>
            <button className="btn-outline">Book a Demo</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <h4>Monthly Overview</h4>
            <div className="chart">
              <div style={{ height: "60%" }} />
              <div style={{ height: "85%" }} />
              <div style={{ height: "45%" }} />
              <div style={{ height: "70%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Everything you need to scale</h2>
        <div className="feature-grid">
          <div className="feature-card"><span>⚡</span><h3>Instant Pay</h3><p>Run payroll in under 90 seconds.</p></div>
          <div className="feature-card"><span>🛡️</span><h3>Compliance</h3><p>Automatic tax filings & reports.</p></div>
          <div className="feature-card"><span>🌍</span><h3>Global</h3><p>Support for 50+ countries.</p></div>
          <div className="feature-card"><span>📊</span><h3>Insights</h3><p>Real-time workforce analytics.</p></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 MyAcc — Workforce Management Simplified.
      </footer>

      {/* Modals */}
      <Signup 
        open={signupOpen} 
        onClose={() => setSignupOpen(false)} 
        openLogin={() => { setSignupOpen(false); setLoginOpen(true); }} 
      />

      <Login 
        open={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        openSignup={() => { setLoginOpen(false); setSignupOpen(true); }} 
      />

    </div>
  );
};

export default Home;
