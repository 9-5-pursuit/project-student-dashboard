import React from "react";

function StudentList({ data }) {
  function count(data) {
    let num = data.length;
    return num;
  }

  return (
    <>
      <h2>All Students</h2>
      <h3>Total Students: {count(data)}</h3>
      <div>
        {data.map(({ id, names, username, profilePhoto }) => (
          <div key={id}>
            <p>
              {names.preferredName} {names.middleName.charAt(0)}.{names.surname}
            </p>
            <p>{username}</p>
            <img
              src={profilePhoto}
              alt="student"
              height="100px"
              id="profile-photo"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentList;
