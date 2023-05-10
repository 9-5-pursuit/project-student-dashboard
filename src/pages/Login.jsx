import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);

    navigate("/dashboard");
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <div className="formInput">
          <label>
            <span>email:</span>
          </label>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="on"
          />

          <label>
            <span>password:</span>
          </label>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="on"
          />
        </div>

        {!isPending && <button className="btn-form">Login</button>}
        {isPending && (
          <button className="btn-form" disabled>
            loading
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
