import React from "react";
import { useCollection } from "../hooks/useCollection";

import "./OnlineUsers.css";
import Avatar from "./Avatar";

const OnlineUsers = () => {
  const { documents, error } = useCollection("users");
  return (
    <div className="user-list">
      <h2>All</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            <span>{user.displayName.split(" ")[0]}</span>
            <div className="avatar-container">
              <Avatar src={user.photoURL} />
              {user.online && <span className="online-user"></span>}
            </div>
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;
