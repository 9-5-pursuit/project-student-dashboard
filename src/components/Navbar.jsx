import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import "./Navbar.css";

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const navigate = useNavigate();

  const userLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="navbar">
      <Link className="logout-link" to="/">
        Home
      </Link>
      {!isPending && (
        <button onClick={userLogout} className="logout-btn">
          Logout
        </button>
      )}
      {isPending && <button disabled>Logging out...</button>}
    </div>
  );
};

export default Navbar;
