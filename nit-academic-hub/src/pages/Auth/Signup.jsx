import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import axios from "axios";
import "../../styles/Auth.css";

const api = import.meta.env.VITE_API_URL;

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/api/auth/signup`, {
        name: fullName,
        email,
        password,
      });
      alert("✅ Signup successful! Now login.");
      console.log(res.data);

      navigate("/login"); // ✅ Redirect to login page
    } catch (err) {
      alert("❌ Signup failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="auth-input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-button">
          Signup
        </button>
        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
