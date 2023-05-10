/* - - - HELPER FNs - - - 
- (a) - month names
- (b) - filter students in cohort
- (c) - sort cohort list
*/

// (a)
function monthName(monthNumber) {
  // todays date;
  const date = new Date();

  // use date to start using months by index (subract by one so jan starts at 0)
  date.setMonth(monthNumber - 1);

  // toLocalString us format long for full month name
  return date.toLocaleString("en-US", { month: "long" });
}

// (b)
function filterStudents(str, setFn1, setFn2, cohortArr) {
  if (str === "AllStudents") {
    setFn1(cohortArr);
    setFn2(cohortArr);
  } else {
    const filteredStudentArr = cohortArr.filter(
      ({ cohort }) => cohort.cohortCode === str.split(" ").join("")
    );
    setFn1(filteredStudentArr);
    setFn2(filteredStudentArr);
  }
}

// (c)
function sortCohort(cohortArr) {
  const allStudentsArr = ["All Students"];
  const seasonOrder = ["Fall", "Winter", "Summer", "Spring"];
  const cohort2025 = [];
  const cohort2026 = [];

  // seperate cohorts by year into arrs of 4 with loop

  cohortArr.forEach(({ cohort }) => {
    const cohortCode = cohort.cohortCode;
    // console.log(cohortCode);
    const cCodeSplit = cohort.cohortCode.replace(`2`, ` 2`);

    if (cohortCode.includes("2025") && !cohort2025.includes(cCodeSplit)) {
      cohort2025.push(cCodeSplit);
    } else if (
      cohortCode.includes("2026") &&
      !cohort2026.includes(cCodeSplit)
    ) {
      cohort2026.push(cCodeSplit);
    }
  });

  // sort each arr by decending and ascending order by index of season

  cohort2025.sort(
    (a, b) =>
      seasonOrder.indexOf(a.split(" ")[0]) -
      seasonOrder.indexOf(b.split(" ")[0])
  );

  cohort2026.sort(
    (a, b) =>
      seasonOrder.indexOf(a.split(" ")[0]) -
      seasonOrder.indexOf(b.split(" ")[0])
  );

  return allStudentsArr.concat(cohort2025, cohort2026);
}

export { monthName, filterStudents, sortCohort };
