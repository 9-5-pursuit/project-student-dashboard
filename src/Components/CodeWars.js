import React from "react";
import { goalPerc } from "../data/functions";
import { cwProgressColors } from "../data/functions";

function CodeWars({ codewars }) {
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
