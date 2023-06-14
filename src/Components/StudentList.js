import { useState } from "react";
import studentData from "../data/data.json";
import { FaTimes, FaCheck } from "react-icons/fa";
import React from "react";

function StudentList() {
  const [student, ] = useState(studentData);
  const [showMore, setShowMore] = useState(false);
  function formatDate(birthDate) {
    const date = new Date(birthDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="col-8">
      <h2>All Students</h2>
      <p>Total Students:{student.length}</p>
      {student.map((item) => {
        return (
          <div className="col-8 border rounded m-3 border-primary" key={item.id}>
            <img  className="img-fluid" src={item.profilePhoto} alt={item.preferredName} />
            <p>
              {item.names.preferredName}{" "}
              {item.names.middleName.slice(0, 1).concat(".")}{" "}
              {item.names.surname}
            </p>
            <p>{item.username}</p>
            <p>Birthday: {formatDate(item.dob)}</p>
            <button onClick={() => setShowMore(!showMore)}>
              {!showMore ? "Show More..." : "Show Less..."}
            </button>
            {showMore && (
              <>
                <ul>
                  Codewars:
                  <li>Current Total:{item.codewars.current.total}</li>
                  <li>Last Week:{item.codewars.current.lastWeek}</li>
                  <li>Goal:{item.codewars.goal.total}</li>
                  <li>
                    Precent of Goal Achieved:
                    {Math.round(
                      item.codewars.current.total /
                        item.codewars.current.lastWeek
                    ) * 100}
                    %
                  </li>
                </ul>
                <ul>
                  Scores:
                  <li>Assignments:{item.cohort.scores.assignments * 100}%</li>
                  <li>Projects:{item.cohort.scores.projects * 100}%</li>
                  <li>Assessments:{item.cohort.scores.assessments * 100}%</li>
                </ul>
                <ul>
                  Certifications:
                  <li>
                    Resume:
                    {item.certifications.resume ? <FaCheck /> : <FaTimes />}
                  </li>
                  <li>
                    LinkedIn:
                    {item.certifications.linkedin ? <FaCheck /> : <FaTimes />}
                  </li>
                  <li>
                    Mock Interview:
                    {item.certifications.mockInterview ? (
                      <FaCheck />
                    ) : (
                      <FaTimes />
                    )}
                  </li>
                  <li>
                    Github:
                    {item.certifications.github ? <FaCheck /> : <FaTimes />}
                  </li>
                </ul>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StudentList;
