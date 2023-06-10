import React from "react";
import Birthday from "./Birthday";
import StudentCohortLink from "./StudentCohortLink";
import Graduate from "./Graduate";
import { middleNameInitial } from "../data/functions";
import ShowMoreButton from "./ShowMoreButton";

function StudentList({
  students,
  setStudents,
  data,
  setCohortName,
  setSearchResult,
  setSelect,
  setSearch,
}) {
  return (
    <>
      {students.map(
        ({ id, names, username, profilePhoto, dob, notes, cohort }) => {
          const firstName = names.preferredName;
          const middleI = middleNameInitial(names.middleName);
          const lastName = names.surname;

          return (
            <div className="students" key={id}>
              <div className="studentInfo">
                <img src={profilePhoto} alt="profile photo" />
                <div
                  style={{
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                >
                  <h4 style={{ marginBottom: "0" }}>
                    {firstName} {middleI} {lastName}
                  </h4>
                  {username}
                  <br />
                  <Birthday dob={dob} />
                  <br />
                  <br />
                  <StudentCohortLink
                    id={id}
                    setStudents={setStudents}
                    cohort={cohort}
                    data={data}
                    setCohortName={setCohortName}
                    setSelect={setSelect}
                    setSearchResult={setSearchResult}
                    setSearch={setSearch}
                  />
                </div>
                <Graduate thisId={id} students={students} />
              </div>
              <ShowMoreButton id={id} students={students} />
              <br />
              <br />
            </div>
          );
        }
      )}
    </>
  );
}
export default StudentList;
