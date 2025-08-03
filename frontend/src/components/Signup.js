import React, { useState } from "react";

function Signup({ onAuthSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Signup failed");
      localStorage.setItem("token", data.token);
      onAuthSuccess();
    } catch {
      alert("Error signing up");
    }
  };

  return (
    <div className="auth-box">
      <h2>Sign Up</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={signup}>Sign Up</button>
    </div>
  );
}

export default Signup;
