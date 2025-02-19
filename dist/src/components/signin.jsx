import React, { useState } from "react";
import { supabase } from "./supabaseClient";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    console.log("🔹 Checking username:", username);
  
    const { data, error: fetchError } = await supabase
      .from("users")
      .select("id, password")
      .eq("username", username)
      .single();
  
    if (fetchError || !data) {
      console.error("❌ User not found or error fetching:", fetchError);
      setError("Invalid username or password");
      return;
    }
  
    console.log("✅ User found:", data);
  
    if (password !== data.password) {
      console.error("❌ Password does not match");
      setError("Invalid username or password");
      return;
    }
  
    console.log("✅ Password matches!");
  
    localStorage.setItem("user_id", data.id); 
  
    console.log("✅ Login successful! Redirecting...");
    window.location.href = "https://admin.taxzyyyscripts.xyz"; 
  };  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        {error && <p style={{ color: "red", fontSize: ".9rem" }}>{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" minLength="0" required value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" className="custom-checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit">Sign In</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="#/signup">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;