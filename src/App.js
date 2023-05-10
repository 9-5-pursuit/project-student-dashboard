import React, { useState } from "react";
import CohortList from "./Components/CohortList";
import data from "./data/data.json";
import GradDd from "./Components/GradDd";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";

function App() {
  // state for student select
  const [students, setStudents] = useState(data);
  // state for cohort name
  const [cohortName, setCohortName] = useState("All Students");
  // state for select
  const [select, setSelect] = useState("all");

  return (
    <div className="toppestLevel">
      <header>
        <Header />
      </header>
      <main>
        <div className="studentList"></div>
        <div className="studentListHeader">
          <h2 style={{ margin: "0" }}>{cohortName}</h2>
          <p>
            Total Students:
            <span style={{ color: "white" }}> {students.length}</span>
          </p>
          <GradDd
            students={students}
            setStudents={setStudents}
            data={data}
            select={select}
            setSelect={setSelect}
            cohortName={cohortName}
          />
        </div>
        <div className="scrollStudents">
          <StudentList
            students={students}
            setStudents={setStudents}
            data={data}
            setCohortName={setCohortName}
            setSelect={setSelect}
          />
        </div>
        <aside className="cohortList">
          <h2
            style={{
              marginTop: "0",
            }}
          >
            Choose Class by Start Date
          </h2>

          <CohortList
            data={data}
            setStudents={setStudents}
            setCohortName={setCohortName}
            setSelect={setSelect}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
