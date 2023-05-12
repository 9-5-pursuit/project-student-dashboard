import { useEffect, useState } from "react";
import "./OnTrackStudents.css";

export default function OnTrackStudents({
  students,
  setFilteredStudents,
  title,
  setTitle,
}) {
  const [showGradStudents, setShowGradStudents] = useState(false);
  const [gradStudents, setGradStudents] = useState([]);

  useEffect(() => {
    const graduatingStudents = students.filter(
      (student) =>
        Object.values(student.certifications).every((v) => v) &&
        student.codewars.current.total > 600
    );
    setGradStudents(graduatingStudents);
  }, [students]);

  useEffect(() => {
    if (showGradStudents) {
      setFilteredStudents(gradStudents);
      setTitle("Graduating Students");
    } else {
      if (title === "Graduating Students") {
        setFilteredStudents(students);
        setTitle("All Students");
      }
    }
  }, [
    showGradStudents,
    title,
    gradStudents,
    setFilteredStudents,
    students,
    setTitle,
  ]);

  useEffect(() => {
    if (title !== "Graduating Students") {
      setShowGradStudents(false);
    }
  }, [title]);

  return (
    <div className="show-on-track-students">
      <button
        className={showGradStudents ? "active" : ""}
        onClick={() => setShowGradStudents(!showGradStudents)}
      >
        {showGradStudents ? "Hide" : "Show"} On Track To Graduate Students
      </button>
    </div>
  );
}
