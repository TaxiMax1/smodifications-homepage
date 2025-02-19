import React, { useState } from "react";
import { supabase } from "./supabaseClient";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const { error } = await supabase.from("users").insert([
      {
        username: username,
        email: email,
        password: password, 
        created_at: new Date(),
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" minLength="6" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" minLength="0" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          <div className="signup-options">
            <label className="terms-and-conditions">
              <input type="checkbox" required />
              <span>I agree to the Terms & Conditions</span>
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="signin-link">
          Already have an account? <a href="signin">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;