import { useState } from "react";
import axios from "axios";
import "./Home.css"; // reuse Home styles

function Signup() {
  const [data, setData] = useState({
    companyName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/signup",
        data
      );

      setMessage(res.data.message || "Account created successfully");

      // Optional: reset form
      setData({ companyName: "", email: "", password: "" });

      // Optional future:
      // navigate("/login");

    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="modal-overlay">
        <div className="modal-box">
          <h2>Create Account</h2>

          {message && (
            <p style={{ color: "#22c55e", marginBottom: "10px" }}>
              {message}
            </p>
          )}

          {error && (
            <p style={{ color: "#ef4444", marginBottom: "10px" }}>
              {error}
            </p>
          )}

          <form onSubmit={submit}>
            <label>Company Name</label>
            <input
              name="companyName"
              placeholder="Enter company name"
              value={data.companyName}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={data.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={data.password}
              onChange={handleChange}
              required
            />

            <button className="primary-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
