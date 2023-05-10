import React from "react";
import { useState } from "react";
import GradTrack from "./GradTrack";
function formatDate(birthDate) {
  const date = new Date(birthDate);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function StudentCard({ student }) {
  const formattedDate = formatDate(student.dob);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div
      className="card my-4 border-3 border-primary-subtle"
      style={{ width: "20rem" }}
    >
      <img
        className="img-fluid rounded-circle mx-auto my-2 "
        style={{ width: "10rem" }}
        src={student.profilePhoto}
        alt="student headshots"
      />
      <p>
        {student.names.preferredName} {student.names.middleName}{" "}
        {student.names.surname}
      </p>
      <p>Username: {student.username} </p>
      <p>Birthday: {formattedDate}</p>
      <button className="show-more-toggle" onClick={toggleShowMore}>
        {showMore ? "Show Less..." : "Show More..."}
      </button>

      {showMore && <GradTrack student={student} />}
    </div> 
  );
}
// {
//     "id": "D8-hEWB",
//     "names": {
//       "preferredName": "Israel",
//       "middleName": "Benjamin",
//       "surname": "Rodriguez"
//     },
//     "username": "israel.rodriguez@pursuit.org",
//     "dob": "2/3/1979",
//     "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
//     "codewars": {
//       "current": {
//         "total": 1804,
//         "lastWeek": 144
//       },
//       "goal": {
//         "total": 850,
//         "lastWeek": 75
//       }
//     },
//     "certifications": {
//       "resume": false,
//       "linkedin": false,
//       "github": false,
//       "mockInterview": false
//     },
//     "notes": [
//       {
//         "commenter": "Alan R.",
//         "comment": "Israel is a pleasure to work with!"
//       }
//     ],
//     "cohort": {
//       "cohortCode": "Winter2025",
//       "cohortStartDate": "12/1/25",
//       "scores": {
//         "assignments": 0.71,
//         "projects": 0.7,
//         "assessments": 0.66
//       }
//     }
//   },
export default StudentCard;
