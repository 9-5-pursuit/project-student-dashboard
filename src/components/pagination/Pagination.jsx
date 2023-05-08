import { useEffect, useState } from "react";
import "./Pagination.css";
export default function Pagination({
  filteredStudents: students,
  setStudentsToDisplay,
  title,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const numOfPages = Math.ceil(students.length / resultsPerPage);

  // if different cohort is selected or use search features, title will change
  // upon title change,  reset current page
  useEffect(() => {
    setCurrentPage(1);
  }, [title]);

  // if currentPage is changed,get students according to current page and change state
  useEffect(() => {
    let studentsOnCurrentPage;
    if (currentPage < numOfPages) {
      studentsOnCurrentPage = students.slice(
        resultsPerPage * (currentPage - 1),
        resultsPerPage * currentPage
      );
      console.log(resultsPerPage * (currentPage - 1));
      console.log(resultsPerPage * currentPage);
    } else if (currentPage === numOfPages) {
      studentsOnCurrentPage = students.slice(
        resultsPerPage * (currentPage - 1)
      );
    }
    setStudentsToDisplay(studentsOnCurrentPage);
  }, [currentPage, numOfPages, setStudentsToDisplay, students]);

  function handleClick(e) {
    if (e.target.id === "next") {
      setCurrentPage(currentPage + 1);
    } else if (e.target.id === "prev") {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="pagination">
      <button
        className="prev"
        id="prev"
        onClick={handleClick}
        disabled={currentPage === 1 ? true : false}
      >
        Prev
      </button>
      {Array.from({ length: numOfPages }, (_, i) => i + 1).map((n, i) => (
        <button
          onClick={() => setCurrentPage(n)}
          key={i}
          className={n === currentPage ? "current-page" : ""}
        >
          {n}
        </button>
      ))}
      <button
        id="next"
        className="next"
        onClick={handleClick}
        disabled={currentPage === numOfPages ? true : false}
      >
        Next
      </button>
    </div>
  );
}
