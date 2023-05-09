import React from "react";
function formatDate(birthDate) {
  const date = new Date(birthDate);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
function StudentCard({ student }) {
  const formattedDate = formatDate(student.dob);
  return (
    <div>
      {student.names.preferredName}
      <h2>All Students</h2>
      <h3>Total Students: count</h3>
      <p>
        {student.names.preferredName} {student.names.middleName} 
        {student.names.surname}
      </p>
      <p>email: {student.username} </p>
      <p>Birthday: {formattedDate}</p>
      <image />
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
