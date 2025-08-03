import React, { useState } from "react";

function Login({ onAuthSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Login failed");
      localStorage.setItem("token", data.token);
      onAuthSuccess();
    } catch {
      alert("Error logging in");
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
