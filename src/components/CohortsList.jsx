import React from "react";
import Avatar from "./Avatar";
import "./CohortsList.css";
import { Link } from "react-router-dom";

const CohortsList = ({ cohorts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cohort</th>
          <th>Start Date</th>
          <th>Fellows</th>
        </tr>
      </thead>
      <tbody>
        {cohorts.length === 0 && (
          <tr>
            <td colSpan={3}>No Cohorts yet</td>
          </tr>
        )}
        {cohorts.map((c) => (
          <tr key={c.id}>
            <td>{c.cohort}</td>
            <td>{c.startDate.toDate().toDateString()}</td>
            <td>
              <ul>
                {c.assignedUsersList.map((user) => (
                  <li key={user.photoURL}>
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <Link to={`/cohorts/${c.id}`} className="table-links">
                View Cohort
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CohortsList;
