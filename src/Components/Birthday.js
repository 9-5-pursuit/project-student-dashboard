import React from "react";
import { monthName } from "../data/functions";

function Birthday({ dob }) {
  const bDayArr = dob.split(`/`);
  const month = monthName(bDayArr[0]);
  const day = bDayArr[1];
  const year = bDayArr[2];
  return (
    <>
      <span style={{ color: "blue" }}>Birthday:</span> {month} {day}, {year}
    </>
  );
}

export default Birthday;
