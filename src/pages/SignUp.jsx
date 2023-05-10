import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
    signup(email, password, displayName, thumbnail);
    navigate("/dashboard");
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>sign up</h2>
        <div className="formInput">
          <label>
            <span>email:</span>
          </label>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label>
            <span>password:</span>
          </label>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <label>
            <span>display name:</span>
          </label>
          <input
            required
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />

          <label>
            <span>Profile thumbnail:</span>
          </label>
          <input
            required
            type="file"
            onChange={handleFileChange}
            autoComplete="on"
          />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </div>
        {!isPending && <button className="btn-form">Sign up</button>}
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
