import React, { useState } from "react";

function CohortOrderButton({ cohortList, setCohortList }) {
  // state for descend/ascend
  const [buttonClick, setButtonClick] = useState(false);

  function handleOrder() {
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
        handleOrder();
      }}
    >
      {buttonClick ? "Descending Order" : "Ascending Order"}
    </button>
  );
}

export default CohortOrderButton;
