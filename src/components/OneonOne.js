import React, { useState } from "react";

function OneonOne({ notes }) {
  const [commenter, setCommenter] = useState(notes.commenter || "");
  const [comment, setComment] = useState(notes.comment || "");
  const [previousNotes, setPreviousNotes] = useState(notes.previousNotes || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new note object
    const newNote = {
      commenter: commenter,
      comment: comment,
    };

    // Update the previous notes array
    setPreviousNotes([...previousNotes, newNote]);

    // Reset form fields
    setCommenter("");
    setComment("");
  };

  return (
    <>
      <section>
        <h2>1-on-1 Notes</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="commenter-name">Commenter Name</label>
          <input
            id="commenter-name"
            value={commenter}
            onChange={(e) => setCommenter(e.target.value)}
          />
          <label htmlFor="comment">Comment</label>
          <input
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Add Note</button>
        </form>
        <ul>
          {previousNotes.map((note, index) => (
            <li key={index}>
              {note.commenter}, {note.comment}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default OneonOne;
