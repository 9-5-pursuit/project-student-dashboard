import React from "react";

import { useCollection } from "../hooks/useCollection";
import { Sidebar } from "../components";

import "./GetCohorts.css";
import CohortsList from "../components/CohortsList";
import { Link } from "react-router-dom";

const GetCohorts = () => {
  const { documents, error } = useCollection("cohorts");
  return (
    <div className="shared">
      <Sidebar />

      <div className="container">
        {error && <p className="error">{error}</p>}
        {documents && <CohortsList cohorts={documents} />}
      </div>
      <Link to="/dashboard" className="back">
        Back{" "}
      </Link>
    </div>
  );
};

export default GetCohorts;
