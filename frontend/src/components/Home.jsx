import React, { useState } from "react";
import "./Home.css";

/* ================= SIGNUP MODAL ================= */
const SignupModal = ({ open, onClose }) => {

  const [form, setForm] = useState({
    fullName: "",
    companyEmail: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.companyEmail) {
      setError("All fields are required");
      return;
    }

    if (!form.companyEmail.includes("@")) {
      setError("Enter valid email address");
      return;
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setForm({ fullName: "", companyEmail: "" });
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Get started
        </h2>

        <p style={{ color: "#64748b", marginBottom: "2rem" }}>
          Join 2,000+ companies scaling with MyAcc.
        </p>

        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
        {success && <p style={{ color: "green", marginBottom: "1rem" }}>Account created successfully ✅</p>}

        <form onSubmit={handleSubmit}>

          <label style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Full Name
          </label>
          <input
            name="fullName"
            placeholder="Jane Doe"
            value={form.fullName}
            onChange={handleChange}
          />

          <label style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Work Email
          </label>
          <input
            type="email"
            name="companyEmail"
            placeholder="jane@company.com"
            value={form.companyEmail}
            onChange={handleChange}
          />

          <button
            className="btn-primary"
            style={{ width: "100%", padding: "1rem" }}
          >
            Create Free Account
          </button>
        </form>
      </div>
    </div>
  );
};

/* ================= LOGIN MODAL ================= */
const LoginModal = ({ open, onClose }) => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setForm({ email: "", password: "" });
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Welcome Back
        </h2>

        <p style={{ color: "#64748b", marginBottom: "2rem" }}>
          Login to your MyAcc account
        </p>

        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
        {success && <p style={{ color: "green", marginBottom: "1rem" }}>Login successful ✅</p>}

        <form onSubmit={handleSubmit}>

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            className="btn-primary"
            style={{ width: "100%", padding: "1rem" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

/* ================= HOME ================= */
const Home = () => {

  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">MyAcc<span>.</span></div>

        <ul className="nav-menu">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Resources</li>
        </ul>

        <div className="nav-actions">
          <button
            className="btn-outline"
            style={{ marginRight: "1rem", border: "none" }}
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>

          <button
            className="btn-primary"
            onClick={() => setSignupOpen(true)}
          >
            Join Now
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Payroll that <br />
            <span style={{ color: "#6366f1" }}>just works.</span>
          </h1>

          <p>
            Automate your back-office operations so you can focus on building
            your team. Compliant, fast, and remarkably simple.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => setSignupOpen(true)}
            >
              Start Free Trial
            </button>

            <button className="btn-outline">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">

            <div style={{ display: "flex", gap: "12px", marginBottom: "2rem" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }}></div>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }}></div>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }}></div>
            </div>

            <h4 style={{ marginBottom: "1rem" }}>Monthly Overview</h4>

            <div style={{
              height: "150px",
              background: "#f1f5f9",
              borderRadius: "16px",
              display: "flex",
              alignItems: "flex-end",
              padding: "15px",
              gap: "10px"
            }}>
              <div style={{ flex: 1, background: "#6366f1", height: "60%", borderRadius: "4px" }}></div>
              <div style={{ flex: 1, background: "#6366f1", height: "85%", borderRadius: "4px" }}></div>
              <div style={{ flex: 1, background: "#6366f1", height: "45%", borderRadius: "4px" }}></div>
              <div style={{ flex: 1, background: "#6366f1", height: "70%", borderRadius: "4px" }}></div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Everything you need to scale</h2>

        <div className="feature-grid">
          {[
            { icon: "⚡", title: "Instant Pay", desc: "Run payroll in 90 seconds flat." },
            { icon: "🛡️", title: "Compliance", desc: "Automatic tax filings and reporting." },
            { icon: "🌍", title: "Global", desc: "Support for teams in 50+ countries." },
            { icon: "📊", title: "Insights", desc: "Real-time labor cost analytics." }
          ].map((item, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: "#64748b", marginTop: "0.5rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "4rem",
        color: "#94a3b8",
        borderTop: "1px solid #f1f5f9"
      }}>
        © 2026 MyAcc — The New Standard for Workforce Management.
      </footer>

      {/* MODALS */}
      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

    </div>
  );
};

export default Home;
