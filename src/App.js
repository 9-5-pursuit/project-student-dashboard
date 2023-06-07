import react, { useState } from "react";

import Header from "./components/Header/Header";
import data from "./data/data.json";
import Sidebar from "./components/Sidebar/Sidebar";
import Students from "./components/Students/Students";

import "./App.css";

// import StudentListByCohorst from "./components/StudentList";

// -------  Student Card --------- \\
// function StudentCard({ student }) {
//   const [moreInfo, setMoreInfo] = useState(false);
//   const toggle = () => {
//     setMoreInfo(!moreInfo);
//     {
//       return (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Codewars:</th>
//               <th>Scores</th>
//               <th>Certifications</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Current Total: {student.codewars.current.total}</td>
//               <td>Asignments: {student.cohort.scores.assignments}</td>
//               <td>Resume: X</td>
//             </tr>
//             <tr>
//               <td>Last Week: {student.codewars.current.lastWeek}</td>
//               <td>Projects: {student.cohort.scores.projects}</td>
//               <td>Linkedin: X</td>
//             </tr>
//             <tr>
//               <td>Goal: {student.codewars.goal.total}</td>
//               <td>Assessments: {student.cohort.scores.assesements}</td>
//               <td>Mock Interview: X</td>
//             </tr>
//             <tr>
//               <td>
//                 Percent of Goal Achieved: ({student.codewars.current.total}
//                 {student.codewars.goal.total})%
//               </td>
//               <td></td>
//               <td>GitHub: X</td>
//             </tr>
//           </tbody>
//         </table>
//       );
//     }
//   };
//   return (
//     <>
//       <div className="container">
//         <div className="row gy-4">
//           <div className="col-12">
//             <div className="card body">
//               <img
//                 className="card-img-left"
//                 src={student.profilePhoto}
//                 alt="student"
//                 width="100"
//                 height="100"
//               />
//               <div className="card-body card-img-left">
//                 {student.names.preferredName} {student.names.middleName[0]}.{" "}
//                 {student.names.surname}
//                 <br />
//                 {student.username}
//                 <br />
//                 <p>
//                   <span style={{ color: "blue" }}>Birthday:</span> {student.dob}
//                 </p>
//               </div>
//               <div>
//                 <span
//                   onClick={toggle}
//                   href="#"
//                   className="nav-link"
//                   style={{ color: "blue" }}
//                 >
//                   {moreInfo ? "Show More" : "Show Less"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ---- ----------   StudentList   ----------- ----- \\
// function StudentList({ students, allStudentsCount }) {
//   const [studentCount, setStudentCount] = useState(students.length);
//   return (
//     <>
//       <div className="student-container">
//         <div className="row">
//           <div className="col-8 offset-4">
//             <div className="card body">
//               <h3>All Students</h3>
//               <h4>Total Students: {allStudentsCount}</h4>
//               {students.map((student) => (
//                 <div key={student.id}>
//                   <StudentCard student={student} />
//                   <CohortList student={student} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // ----- -----------    COHORT LIST     ----------- -----\\
// function CohortList(students) {
//   // return (
//   <aside>
//     <div>
//       <h2>Choose a Class by Start Date</h2>
//       <h3>All Students</h3>
//     </div>
//     <StudentCohort students={students} />
//   </aside>;
//   //);
// }
// function StudentCohort({ students }) {
//   const allStudentsCount = { students }.length;
//   const [currentCohortCount, setCurrentCohortCount] =
//     useState(allStudentsCount);
//   // {
//   //   setCurrentCohortCount(
//   //     [students.cohort].includes([student.cohort.cohortCode]).length
//   //   );
//   // }

//   return (
//     <aside>
//       <div>
//         <div className="student-container">
//           <div className="table"></div>
//           <ul>{/* <li>{student.cohort.cohortCode}</li> */}</ul>
//         </div>
//       </div>
//     </aside>
//   );
// }

function App() {
  const [studentArray, setStudentArray] = useState(alphabeticalOrder(data));

  const [cohortArray, setCohortArray] = useState(parsedData());

  function alphabeticalOrder(data) {
    return data.sort((a, b) => {
      const nameA = a.names.preferredName.toUpperCase();
      const nameB = b.names.preferredName.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  function parsedData() {
    let uniqueCohortArray = [];

    data.forEach((item) => {
      if (uniqueCohortArray.indexOf(item.cohort.cohortCode) === -1) {
        uniqueCohortArray.push(item.cohort.cohortCode);
      }
    });

    let parsedCohortArray = [[], []];

    uniqueCohortArray.forEach((item) => {
      let cohortDate = Number(item.slice(item.length - 4));
      let season = item.slice(0, item.length - 4);

      if (cohortDate === 2025) {
        let dataObj = {
          year: cohortDate,
          season,
        };

        parsedCohortArray[0].push(dataObj);
      }

      if (cohortDate === 2026) {
        let dataObj = {
          year: cohortDate,
          season,
        };

        parsedCohortArray[1].push(dataObj);
      }
    });

    let sortedNestedArrayData = [];

    function orderByYearAndSeason(data, year) {
      let resultData = [];

      data.forEach((item, index) => {
        if (item.year === year && item.season === "Winter") {
          resultData[0] = item;
        }

        if (item.year === year && item.season === "Fall") {
          resultData[1] = item;
        }
        if (item.year === year && item.season === "Summer") {
          resultData[2] = item;
        }

        if (item.year === year && item.season === "Spring") {
          resultData[3] = item;
        }
      });

      return resultData;
    }

    parsedCohortArray.forEach((item, index) => {
      let year = index === 0 ? 2025 : 2026;

      sortedNestedArrayData.push(orderByYearAndSeason(item, year));
    });

    return sortedNestedArrayData.flat();
  }

  function handleSortClick(season, year) {
    let joinedValue = `${season}${year}`;

    let filterData = data.filter((item) => {
      return item.cohort.cohortCode === joinedValue;
    });

    let sortedData = alphabeticalOrder(filterData);

    setStudentArray(sortedData);
  }

  function handleShowAllStudents() {
    setStudentArray(data);
  }

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar
          cohortArray={cohortArray}
          handleSortClick={handleSortClick}
          handleShowAllStudents={handleShowAllStudents}
        />
        <Students studentArray={studentArray} />

        <aside>{/* <CohortList /> */}</aside>
      </div>
    </>
  );
}

export default App;
