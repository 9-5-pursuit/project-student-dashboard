import React, { useState } from "react";
import CohortList from "./components/CohortList";
import StudentList from "./components/StudentList";
import data from "./data/data.json";

function App() {
  return (
    <>
      <>
        <div>
          <h1>Student Dashboard</h1>
        </div>
      </>
      {/* <StudentList data={data} /> */}
      <CohortList data={data} />
    </>
  );
}

export default App;
