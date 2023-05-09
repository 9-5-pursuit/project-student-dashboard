import React, { useState } from "react";

function CohortOrderButton({ cohortList, setCohortList }) {
  // state for descend/ascend
  const [buttonClick, setButtonClick] = useState(false);

  function handleButtonOnClick() {
    const spreadArr = [...cohortList];
    const allStudents = spreadArr.shift();
    spreadArr.reverse().unshift(allStudents);
    setCohortList(spreadArr);
    setButtonClick(!buttonClick);
  }
  return (
    <button
      className="cohortButton"
      onClick={() => {
        handleButtonOnClick();
      }}
    >
      {buttonClick ? "Descending Order" : "Ascending Order"}
    </button>
  );
}

export default CohortOrderButton;
