import React from "react";
import { useCollection } from "../hooks/useCollection";
import CohortsList from "../components/CohortsList";


const GetCohorts = () => {
  const { documents, error } = useCollection("cohorts");

  return (
    <div className="shared">
      <div className="container-table">
        {error && <p className="error">{error}</p>}
        {documents && <CohortsList cohorts={documents} />}
      </div>
    </div>
  );
};

export default GetCohorts;
