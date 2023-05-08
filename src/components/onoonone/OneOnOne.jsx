import { useState } from "react";
import "./OneOnOne.css";

export default function OneOnOne({ student, addNoteToStudent }) {
  const [formData, setFormData] = useState({ commenter: "", comment: "" });
  const handleChange = (e) => {
    const newObj = { ...formData };
    newObj[e.target.id] = e.target.value;
    setFormData(newObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addNoteToStudent(student.id, formData);
    resetForm();
  };
  const resetForm = () => {
    setFormData({ commenter: "", comment: "" });
  };
  return (
    <div className="one-on-one">
      <h3>1-on-1 Notes</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter"> Commenter Name </label>
        <input
          type="text"
          value={formData.commenter}
          onChange={handleChange}
          id="commenter"
          required
        />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          value={formData.comment}
          onChange={handleChange}
          id="comment"
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-display">
        <ul className="notes-list">
          {student.notes.length > 0 &&
            student.notes.map((note, i) => (
              <li key={i}>
                {note.commenter} says, "{note.comment}"
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
