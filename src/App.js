import React, { useState } from "react";
import CohortList from "./Components/CohortList";
import data from "./data/data.json";
import GradDd from "./Components/GradDd";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import StudentList from "./Components/StudentList";

function App() {
  // state for student select
  const [students, setStudents] = useState(data);
  // state for cohort name
  const [cohortName, setCohortName] = useState("All Students");
  // state for select
  const [select, setSelect] = useState("all");
  // state for user inputted search
  const [search, setSearch] = useState("");
  // state for search data
  const [searchResult, setSearchResult] = useState(data);

  return (
    <div className="toppestLevel">
      <header>
        <Header />
      </header>
      <main>
        <div className="studentList">
          <div className="studentListHeader">
            <h2 style={{ margin: "0" }}>{cohortName}</h2>
            <p>
              Total Students:
              <span style={{ color: "blue" }}> {students.length}</span>
            </p>
            <SearchBar
              setStudents={setStudents}
              search={search}
              setSearch={setSearch}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
            />
            <GradDd
              students={students}
              setStudents={setStudents}
              data={data}
              select={select}
              setSelect={setSelect}
              setSearch={setSearch}
              cohortName={cohortName}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
            />
          </div>
          <div className="scrollStudents">
            <StudentList
              students={students}
              setStudents={setStudents}
              data={data}
              setCohortName={setCohortName}
              setSearch={setSearch}
              setSearchResult={setSearchResult}
              setSelect={setSelect}
            />
          </div>
        </div>
        <aside className="cohortList">
          <h2
            style={{
              marginTop: "0",
            }}
          >
            Choose Class by Start Date:
          </h2>

          <CohortList
            data={data}
            setStudents={setStudents}
            setCohortName={setCohortName}
            setSelect={setSelect}
            setSearch={setSearch}
            setSearchResult={setSearchResult}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
