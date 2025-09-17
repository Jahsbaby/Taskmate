import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { API } from "./config";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <Routes>
      {/* Redirect root depending on auth */}
      <Route
        path="/"
        element={<Navigate to={token ? "/dashboard" : "/login"} />}
      />

      {/* Login page */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* Register page */}
      <Route path="/register" element={<Register onRegister={handleLogin} />} />

      {/* Dashboard (protected) */}
      <Route
        path="/dashboard"
        element={
          token ? (
            <Dashboard token={token} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}
