import React, { useState } from "react";
import CohortList from "./components/CohortList";
import StudentList from "./components/StudentList";
import data from "./data/data.json";

function App() {
  const [cohortStudentList, setCohortStudentList] = useState(null);
  const [originalData, setOriginalData] = useState(data);
  const [cohortYear, setCohortYear] = useState(null);

  function updateStudentList(info) {
    if (info.length === originalData.length) {
      setOriginalData(data);
      setCohortStudentList(null);
      setCohortYear(null);
      return data;
    }

    let year = info.replace(" ", "");
    let cohortData = data.filter(({ cohort }) => year === cohort.cohortCode);

    if (cohortData.length > 0) {
      setCohortYear(info);
      setCohortStudentList(cohortData);
      return cohortData;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div
            className="jumbotron bg-success text-center text-white"
            style={{ backgroundColor: "#CEF3D6" }}
          >
            <h1 className="display-4">Student Dashboard</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <CohortList data={data} updateStudentList={updateStudentList} />
        </div>
        <div className="col-8">
          <StudentList
            originalData={originalData}
            cohortStudentList={cohortStudentList}
            cohortYear={cohortYear}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
