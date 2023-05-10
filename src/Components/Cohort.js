import { useState } from "react";

function Cohort({ studentData }) {
  const [student, setStudent] = useState(studentData);
  const [cohort, setCohort] = useState("All Student");

  function filteredCohort(cohort) {
    let filterStudent = (studentData.filter = (students) => {
      let newsItemA = `${students.cohort.cohortCode.substring(
        0,
        students.cohort.cohortCode.length - 4
      )}`;
      let newItemB = `${students.cohort.cohortCode.substring(
        students.cohort.cohortCode.length.length - 4
      )}`;
      return newsItemA + " " + newItemB === cohort;
      // console.log(students)
    });
    setStudent(filterStudent);

    if (cohort === null) {
      return setCohort("All Student", ...studentData);
    }
    return filterStudent;
  }

  return (
    <div className="semester">
      <h3>Choose a Class by Start Date</h3>
      <p onClick={() => setStudent(studentData)}>All Students</p>

      {studentData
        .map((item) => {
          return item.cohort.cohortCode;
        })
        .filter((item, index, array) => {
          return array.indexOf(item) === index;
        })
        .map((item, index) => {
          let newItemA = `${item.substring(0, item.length - 4)}`;
          let newItemB = `${item.substring(item.length - 4)}`;
          let joinedItem =  newItemA + " " + newItemB
          return ( 

            <p key={index} onClick={() => filteredCohort(joinedItem)}>
              {" "}
              {newItemA + " " + newItemB}
            </p>
          );
        })}
    </div>
  );

}
export default Cohort;
