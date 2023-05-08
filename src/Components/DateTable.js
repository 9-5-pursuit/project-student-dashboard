export default function DateTable({ setSelectDate }) {
  //console.log(studentData);
  const cohortArr = [
    "All Students",
    "Winter 2026",
    "Fall 2026",
    "Summer 2026",
    "Spring 2026",
    "Winter 2025",
    "Fall 2025",
    "Summer 2025",
    "Spring 2025",
  ];

  //   studentData.map((item) => {
  //     console.log(item.cohort.cohortCode);
  //     cohortArr.push(item.cohort.cohortCode);
  //     cohortObj = [item.cohort.cohortCode];
  //   });
  //   //console.log(cohortArr);
  //   console.log(cohortObj);
  function handleState(option) {
    //console.log(option);
    setSelectDate(option);
  }

  return (
    <div className="container-md col-4">
      <h3 className="text-center">Choose a Class by Start Date</h3>
      <ul className="list-group text-left list-group-flush">
        {cohortArr.map((item, index) => {
          const localItem = item;
          return (
            <button
              type="button"
              className="btn list-group-item"
              key={index}
              onClick={() => {
                handleState(localItem);
              }}
            >
              {item}
            </button>
            // <li key={index} className="list-group-item">

            // </li>
          );
        })}
      </ul>
    </div>
  );
}
