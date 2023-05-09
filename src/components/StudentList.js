import React, { useState } from "react";
import Details from "./Details";

function StudentList({ originalData, cohortStudentList, cohortYear }) {
  //   const [showDetails, setShowDetails] = useState(false);
  const [studentDetails, setStudentDetails] = useState({});

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
      codewars.current.total > 600
    ) {
      return "On Track to Graduate";
    }
  }

  function handleShowDetails(id) {
    setStudentDetails((previousDetails) => {
      console.log(previousDetails);
      return { ...previousDetails, [id]: !previousDetails[id] };
    });
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
            cohort,
          }) => (
            <div key={id}>
              <img
                src={profilePhoto}
                alt="student"
                height="100px"
                id="profile-photo"
              />
              <p>
                {names.preferredName} {names.middleName.charAt(0)}.
                {names.surname}
              </p>
              <p>{username}</p>
              <p>{birthdayConversion(dob)}</p>
              <p>{onTrackToGraduate(certifications, codewars)}</p>
              <button onClick={() => handleShowDetails(id)}>
                {studentDetails[id] ? <p>Show Less...</p> : <p>Show More...</p>}
              </button>
              {studentDetails[id] && (
                <Details
                  codewars={codewars}
                  certifications={certifications}
                  cohort={cohort}
                />
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}

export default StudentList;
