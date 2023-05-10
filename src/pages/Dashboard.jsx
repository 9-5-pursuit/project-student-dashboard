import React from "react";
import { useParams } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDocument } from "../hooks/useDocument";
import "./Dashboard.css";
import OnlineUsers from "../components/OnlineUsers";
import CohortChat from "./CohortChat";

const Dashboard = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { document } = useDocument("cohorts");

  // if (error) {
  //   return <div className="error">{error}</div>;
  // }
  // if (!document) {
  //   return <div className="loading">Loading...</div>;
  // }

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dash-container">
        <Navbar />
        <CohortChat document={document} id={id} />
      </div>
      {user && <OnlineUsers />}
    </div>
  );
};

export default Dashboard;
