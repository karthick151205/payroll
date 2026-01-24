import { useState } from "react";
import axios from "axios";
import "./Home.css"; // reuse same styles

function Login() {
  const [data, setData] = useState({
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
        "http://localhost:8080/api/auth/login",
        data
      );

      // Example: backend returns { token, message }
      setMessage(res.data.message || "Login successful");

      // Save token (future use)
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Later → redirect to dashboard
      // navigate("/dashboard");

    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="modal-overlay">
        <div className="modal-box">
          <h2>Login</h2>

          {message && <p style={{ color: "#22c55e", marginBottom: "10px" }}>{message}</p>}
          {error && <p style={{ color: "#ef4444", marginBottom: "10px" }}>{error}</p>}

          <form onSubmit={submit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              required
            />

            <button className="primary-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
  