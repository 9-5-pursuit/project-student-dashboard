import React from "react";
import { useCollection } from "../hooks/useCollection";

import "./OnlineUsers.css";
import Avatar from "./Avatar";

const OnlineUsers = () => {
  const { documents, error, isPending } = useCollection("users");

  const onlineUsersCount = documents ? documents.filter(user => user.online).length : 0;

  return (
    <div className="user-list">
      <h2>{`${onlineUsersCount} online`}</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName.split(" ")[0]}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;
