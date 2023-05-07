import React from "react";

function StudentList({ originalData, cohortStudentList }) {
  function count() {
    let num;
    if (cohortStudentList) {
      console.log("cohortStudentList");
      num = cohortStudentList.length;
    } else {
      console.log("data");
      num = originalData.length;
    }

    return num;
  }

  return (
    <>
      <h2>All Students</h2>
      <h3>Total Students: {count()}</h3>
      <div>
        {(cohortStudentList || originalData).map(
          ({ id, names, username, profilePhoto }) => (
            <div key={id}>
              <p>
                {names.preferredName} {names.middleName.charAt(0)}.
                {names.surname}
              </p>
              <p>{username}</p>
              <img
                src={profilePhoto}
                alt="student"
                height="100px"
                id="profile-photo"
              />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default StudentList;
