import { useState } from "react";
import "./Form.css";

function Form({ student }) {
  const [comment, setComment] = useState("");
  const [commenter, setCommenter] = useState("");

  function handleSubmit(event, studentObj) {
    event.preventDefault();
    console.log(studentObj);

    setComment("");
    setCommenter("");
  }

  return (
    <div className="form">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={(event) => handleSubmit(event, student)}>
        <label htmlFor="commenter">Commenter Name</label>
        <input
          type="text"
          id="commenter"
          name="commenter"
          value={commenter}
          onChange={(event) => setCommenter(event.target.value)}
        />
        <br />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {}
      </ul>
    </div>
  );
}
export default Form;
