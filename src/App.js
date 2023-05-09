import React, { useState } from "react";
import CohortList from "./components/CohortList";
import Details from "./components/Details";
import data from "./data/data.json";
import OneonOne from "./components/OneonOne";

function App() {
  return (
    <>
      <div>
        <h1>Student Dashboard</h1>
      </div>
      <OneonOne />
      <CohortList data={data} />
    </>
  );
}

export default App;
