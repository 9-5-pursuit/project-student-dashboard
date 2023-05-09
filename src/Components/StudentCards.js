import StudentCard from "./StudentCard";
export default function StudentCards({ studentData, selectDate }) {
  //console.log(selectDate);
  const localState = selectDate;
  const localData = studentData;

  function handleData(localState, localData) {
    let formatStr;
    if (localState.includes(" ")) {
      //formatStr = localState.replace(/\s/g, ""); // s refers to whitespace characters
      formatStr = localState.replace(" ", "");
    }

    const formatData = localData.filter((element) => {
      let localElement;
      if (element.cohort.cohortCode === formatStr) {
        localElement = element;
        //return element;
      }
      return localElement;
    });

    return (
      <>
        <h4>
          Total Students:{" "}
          <span className="text-success"> {formatData.length}</span>
        </h4>
        {formatData.map((item) => {
          return (
            <div key={item.id} className="container grid gap-0 row-gap-3">
              <StudentCard data={item} />
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="container col-8">
      <h3>{localState}</h3>

      {localState === "All Students" ? (
        <>
          <h4>
            Total Students:{" "}
            <span className="text-success"> {localData.length}</span>
          </h4>
          {localData.map((item, index) => {
            return (
              <div key={item.id} className="container grid gap-0 row-gap-3">
                <StudentCard data={item} />
              </div>
            );
          })}
        </>
      ) : (
        <>{handleData(localState, localData)}</>
      )}
      {/* ----------------------------------------------------------- */}
      {/* <h4>
        Total Students:
        <span className="text-success"> {localData.length}</span>
      </h4>
      <div className="container grid gap-0 row-gap-3">
        <StudentCard />
      </div> */}
    </div>
  );
}
