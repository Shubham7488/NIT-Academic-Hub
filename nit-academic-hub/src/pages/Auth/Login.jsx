import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../../styles/Auth.css";

const api = import.meta.env.VITE_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      const res = await axios.post(`${api}/api/auth/login`, {
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("✅ Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const { name, email, picture } = decoded;

      const res = await axios.post(`${api}/api/auth/google-login`, {
        name,
        email,
        photo: picture,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("✅ Google login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Google login error:", err);
      alert("❌ Google login failed.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>

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
          Login
        </button>

        <div className="auth-divider">or</div>

{/*         <div className="google-button">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => alert("❌ Google Login Failed")}
            useOneTap
          />
        </div> */}

        <p className="auth-footer">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
