import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "./Signup.css";

export default function Signup() {
  // Define state variables using the useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  // Call a custom hook useSignup() to handle user registration
  const { signup, isPending, error } = useSignup();

  // Handle form submission when the "Sign up" button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the signup function from the custom hook with the input fields' values
    signup(email, password, displayName, thumbnail);
    // console.log(displayName, email, thumbnail);
  };

  // Handle image file upload and validation
  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    // Check if the selected file is not empty
    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }

    // Check if the selected file is an image
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }

    // Check if the selected file size is less than 100kb
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    // Update state variables with the selected file and reset the error state
    setThumbnailError(null);
    setThumbnail(selected);
  };

  // Render the signup form with input fields and buttons
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>sign up</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Profile Thumbnail:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
