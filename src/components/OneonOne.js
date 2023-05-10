import React, { useState } from "react";

function OneonOne({ notes }) {
  let iterateForComment = notes.map(({ comment }) => comment);
  // console.log(iterateForComment);
  let iterateForCommenter = notes.map(({ commenter }) => commenter);

  const [commenter, setCommenter] = useState(iterateForCommenter || "");
  const [comment, setComment] = useState(iterateForComment || "");
  const [previousNotes, setPreviousNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // new note object
    const newNote = {
      commenter: commenter,
      comment: comment,
    };

    // Updates the previous notes array
    setPreviousNotes([...previousNotes, newNote]);

    // Resets the form fields
    setCommenter("");
    setComment("");
  };

  return (
    <section>
      <h2>1-on-1 Notes</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="commenter-name" className="form-label">
                Commenter Name
              </label>
              <input
                id="commenter-name"
                className="form-control"
                value={commenter}
                onChange={(e) => setCommenter(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <input
                id="comment"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-info">
              Add Note
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            {previousNotes.map((note, index) => (
              <li key={index} className="list-group-item">
                {note.commenter}, {note.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OneonOne;
