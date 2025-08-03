import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Weather from "./components/Weather";

function App() {
  const [authStep, setAuthStep] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="App">
        {authStep === "login" ? (
          <>
            <Login onAuthSuccess={() => setIsAuthenticated(true)} />
            <p onClick={() => setAuthStep("signup")} style={{ cursor: "pointer", marginTop: 10 }}>Don't have an account? Sign up</p>
          </>
        ) : (
          <>
            <Signup onAuthSuccess={() => setIsAuthenticated(true)} />
            <p onClick={() => setAuthStep("login")} style={{ cursor: "pointer", marginTop: 10 }}>Already have an account? Login</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <button onClick={logout}>Logout</button>
      <Weather />
    </div>
  );
}

export default App;
