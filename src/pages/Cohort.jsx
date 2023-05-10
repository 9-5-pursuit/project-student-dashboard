import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import Avatar from "../components/Avatar";

import "./Cohort.css";

const Cohort = () => {
  const { id } = useParams();
  const { error, document } = useDocument("cohorts");

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
        {document.assignedUsersList.map((user) => (
          <div key={document.startDate} className="fellows">
            <Avatar src={user.photoURL} />
            <h5>{user.displayName}</h5>
          </div>
        ))}
        <Link to="/dashboard" className="btn">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Cohort;
