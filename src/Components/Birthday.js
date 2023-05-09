import React from "react";

function Birthday({ dob }) {
  function monthName(monthNumber) {
    // todays date;
    const date = new Date();

    // use date to start using months by index (subract by one so jan starts at 0)

    date.setMonth(monthNumber - 1);

    // toLocalString us format long for full month name

    return date.toLocaleString("en-US", { month: "long" });
  }
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
