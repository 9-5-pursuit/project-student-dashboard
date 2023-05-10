import React, { useState } from "react";
import CohortOrderButton from "./CohortOrderButton";
import { filterStudents } from "../data/functions";
import { sortCohort } from "../data/functions";

function CohortList({
  data,
  setStudents,
  setCohortName,
  setSearch,
  setSearchResult,
  setSelect,
}) {
  // state for cohort list
  const [cohortList, setCohortList] = useState(sortCohort(data));

  // --- sort cohort fn

  function cohortFilter(event) {
    const value = event.target.id;
    setCohortName(event.target.innerText);

    if (value === "AllStudents") {
      setStudents(data);
      setSearchResult(data);
    } else {
      filterStudents(value, setStudents, setSearchResult, data);
    }
    // reset search & dd after cohort selected
    setSelect("all");
    setSearch("");
  }

  return (
    <>
      <CohortOrderButton
        cohortList={cohortList}
        setCohortList={setCohortList}
      />

      {cohortList.map((el) => {
        const code = el.split(" ").join("");

        return (
          <h4 className="cohort" key={el}>
            <span
              id={code}
              onClick={(event) => {
                cohortFilter(event);
              }}
            >
              {el}
            </span>
            <hr />
          </h4>
        );
      })}
    </>
  );
}

export default CohortList;
