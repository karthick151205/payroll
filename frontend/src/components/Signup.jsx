import { useState } from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    companyName: "",
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8080/api/auth/signup",
      data
    );
    alert(res.data);
  };

  return (
    <form onSubmit={submit}>
      <h2>Signup</h2>
      <input placeholder="Company Name"
        onChange={e => setData({...data, companyName: e.target.value})} />
      <input placeholder="Email"
        onChange={e => setData({...data, email: e.target.value})} />
      <input type="password" placeholder="Password"
        onChange={e => setData({...data, password: e.target.value})} />
      <button>Signup</button>
    </form>
  );
}

export default Signup;
