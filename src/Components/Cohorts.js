import React from "react";
import studentData from "../data/data.json";

const uniqueClass = studentData.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.cohort.cohortCode]) {
    accumulator[currentValue.cohort.cohortCode] = 1;
  } else {
    accumulator[currentValue.cohort.cohortCode]++;
  }
  return accumulator;
}, {});

const uniqueClassArray = Object.keys(uniqueClass);

const addSpace = uniqueClassArray.map((eachClass) =>
  eachClass.replace(/(\D+)(\d+)/, "$1 $2")
);

const sortedUniqueClassArray = addSpace.sort((a, b) => {
  const numA = parseInt(a.split(" ")[1]);
  const numB = parseInt(b.split(" ")[1]);
  return numA - numB;
});

function Cohorts({ filterStudents }) {
  return (
    <>
      {sortedUniqueClassArray.map((eachClass) => {
        return (
          <h4 key={eachClass} onClick={() => filterStudents(eachClass)}>
            {eachClass}
          </h4>
        );
      })}
    </>
  );
}

export default Cohorts;
