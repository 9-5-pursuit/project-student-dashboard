import React from "react";

import ShowMore from "../ShowMore/ShowMore";

import "./Students.css";

function Students({ studentArray }) {
  function handleBirthdayParse(dob) {
    let splittedDob = dob.split("/");

    let month = splittedDob[0];
    let date = splittedDob[1];
    let year = splittedDob[2];

    let finalDateResult = "";

    if (month === "1") finalDateResult += `January ${date}, ${year}`;
    if (month === "2") finalDateResult += `February ${date}, ${year}`;
    if (month === "3") finalDateResult += `March ${date}, ${year}`;
    if (month === "4") finalDateResult += `April ${date}, ${year}`;
    if (month === "5") finalDateResult += `May ${date}, ${year}`;
    if (month === "6") finalDateResult += `June ${date}, ${year}`;
    if (month === "7") finalDateResult += `July ${date}, ${year}`;
    if (month === "8") finalDateResult += `August ${date}, ${year}`;
    if (month === "9") finalDateResult += `September ${date}, ${year}`;
    if (month === "10") finalDateResult += `October ${date}, ${year}`;
    if (month === "11") finalDateResult += `November ${date}, ${year}`;
    if (month === "12") finalDateResult += `December ${date}, ${year}`;

    return finalDateResult;
  }

  function handleOnTrackToGraduate(certs, codeWars) {
    let isOnTime = true;

    for (let key in certs) {
      if (!certs[key]) {
        isOnTime = false;
        return isOnTime;
      }
    }

    for (let key in codeWars) {
      if (codeWars[key].total <= 600) {
        isOnTime = false;
        return isOnTime;
      }
    }

    return isOnTime;
  }

  return (
    <section className="students-container">
      <h2>All Students</h2>
      <p>
        Total Students: <span>{studentArray.length}</span>
      </p>

      {studentArray.map((item) => {
        return (
          <div className="student-container" key={item.id}>
            <div>
              <img src={item.profilePhoto} alt={item.names.preferredName} />
            </div>
            <div>
              <h3 className="student-container__h3">
                {item.names.preferredName} {item.names.middleName[0]}{" "}
                {item.names.surname}
              </h3>
              <p>{item.username}</p>
              <p className="student-container__dob">
                <span>Birthday:</span> {handleBirthdayParse(item.dob)}
              </p>

              <ShowMore
                cohort={item.cohort}
                certifications={item.certifications}
                codewars={item.codewars}
              />
            </div>
            <p className="student-container__on-track-to-grad">
              {handleOnTrackToGraduate(item.certifications, item.codewars) && (
                <span>On Track to Graduate</span>
              )}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Students;

// import postData from "../data/data.json";

// ----   StudentList   ------- \\
// function StudentList({ students }) {
//   const [studentCount, setStudentCount] = useState(students.length);
//   return (
//     <>
//       <div className="student-container">
//         <div className="row">
//           <div className="col-8 offset-4">
//             <div className="card body">
//               <h3>All Students</h3>
//               <h4>Total Students: {studentCount}</h4>
//               {students.map((student) => (
//                 <div key={student.id}>
//                   <StudentCard student={student} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default StudentList;
