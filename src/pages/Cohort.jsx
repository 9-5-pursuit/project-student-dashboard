import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import Avatar from "../components/Avatar";

import "./Cohort.css";

const Cohort = () => {
  
  const { error, document } = useDocument("cohorts");
  console.log(document);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="cohort-details">
      <div className="cohort-card">
        <h3>{document.cohort}</h3>
        <p className="start-date">
          Cohort Starts on: {document.startDate.toDate().toDateString()}
        </p>
        <h4>Fellows</h4>
        {document.assignedUsersList &&
          document.assignedUsersList.map((user) => (
            <div key={document.id} className="fellows">
              <Avatar src={user.photoURL} />
              <h5>{user.displayName}</h5>
            </div>
          ))}
        <Link to="/" className="btn">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Cohort;
