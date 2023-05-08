import React from "react";

function StudentList({ originalData, cohortStudentList, cohortYear }) {
  function count() {
    let num;
    if (cohortStudentList) {
      num = cohortStudentList.length;
    } else {
      num = originalData.length;
    }

    return num;
  }

  function birthdayConversion(dob) {
    const arrOfMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let splitDatesArr = dob.split("/");
    // console.log(splitDatesArr);

    let year = splitDatesArr[2];
    let day = splitDatesArr[1];
    let monthNum = splitDatesArr[0];
    // console.log(year, day, monthNum);

    let newBirthDate = `${year}-${day}-${monthNum}`;

    const date = new Date(newBirthDate);
    // console.log(date);
    const month = date.getMonth();
    // console.log(month, dob);

    let birthday = `${arrOfMonths[month]} ${day}, ${year}`;

    return birthday;
  }

  function onTrackToGraduate(certifications, codewars) {
    // console.log(codewars.current.total);

    if (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      codewars.current.total >= 600
    ) {
      return "On Track to Graduate";
    }
  }

  return (
    <>
      {cohortStudentList ? <h2>{cohortYear}</h2> : <h2>All Students</h2>}
      <h3>Total Students: {count()}</h3>
      <div>
        {(cohortStudentList || originalData).map(
          ({
            id,
            names,
            username,
            profilePhoto,
            dob,
            certifications,
            codewars,
          }) => (
            <div key={id}>
              <p>
                {names.preferredName} {names.middleName.charAt(0)}.
                {names.surname}
              </p>
              <p>{username}</p>
              <p>{birthdayConversion(dob)}</p>
              <p>{onTrackToGraduate(certifications, codewars)}</p>
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
