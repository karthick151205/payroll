import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      data
    );
    alert(res.data);
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email"
        onChange={e => setData({...data, email: e.target.value})} />
      <input type="password" placeholder="Password"
        onChange={e => setData({...data, password: e.target.value})} />
      <button>Login</button>
    </form>
  );
}

export default Login;
