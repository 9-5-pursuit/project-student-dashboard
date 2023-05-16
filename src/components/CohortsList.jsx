import React, { useState } from "react";
import Select from "react-select"
import Avatar from "./Avatar";
import "./CohortsList.css";

const options = [
  { value: "all", label: "All" },
  { value: "winter2026", label: "Winter 2026" },
  { value: "fall2026", label: "Fall 2026" },
  { value: "spring2026", label: "Spring 2026" },
  { value: "summer2026", label: "Summer 2026" },
  { value: "winter2025", label: "Winter 2025" },
  { value: "fall2025", label: "Fall 2025" },
  { value: "spring2025", label: "Spring 2025" },
  { value: "summer2025", label: "Summer 2025" },
];

const CohortsList = ({ cohorts }) => {
  // console.log(cohorts)
  const [cohort, setCohort] = useState("all");

  const filteredCohorts = cohort === "all" ? cohorts : cohorts.filter((c) => c.cohort === cohort);
  // console.log(filteredCohorts)

  const totalStudents = filteredCohorts.reduce(
    (total, cohort) => total + cohort.assignedUsersList.length, 0);

  return (
    <main className="table">
     <div className="table-select">
        
      <Select onChange={(option) => setCohort(option.value)} options={options} />
      <h4 className="student">Total Students: {totalStudents}</h4>
    </div>
    <hr />
    <div className="table-body">  
        <table>
          <thead>
            <tr> 
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              </tr>        
          </thead>
          <tbody>
            {filteredCohorts.map((c) => c.assignedUsersList.map((user) => (
              <tr key={user.photoURL}>
                <td><Avatar src={user.photoURL} className="img" /></td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
              </tr>
            )))}
          </tbody>
        </table> 
      </div>
  </main>
  );
};

export default CohortsList;
