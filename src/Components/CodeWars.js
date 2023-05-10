import React, { useState } from "react";

function CodeWars({ codewars }) {
  function goalPerc(num1, num2) {
    return Math.round((num1 / num2) * 100);
  }

  function cwProgressColors(percentage) {
    if (percentage < 50) {
      return "red";
    } else if (percentage > 50 && percentage < 100) {
      return "goldenrod";
    } else {
      return "green";
    }
  }

  const total = codewars.current.total;
  const lastWeek = codewars.current.lastWeek;
  const goal = codewars.goal.total;
  const percentAchieved = goalPerc(total, goal);
  const color = cwProgressColors(percentAchieved);

  return (
    <div className="codewars">
      <h4>CodeWars:</h4>
      <p>
        <span>Current Total: </span>
        {total}
      </p>
      <p>
        <span>Last Week: </span>
        {lastWeek}
      </p>
      <p>
        <span>Goal: </span>
        {goal}
      </p>
      <p>
        <span>Percent of Goal Achieved: </span>
        <span style={{ color: `${color}` }}>{percentAchieved}%</span>
      </p>
    </div>
  );
}

export default CodeWars;
