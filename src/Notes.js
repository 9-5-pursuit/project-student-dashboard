import React from "react";

function Notes(props) {
  const { notes, previousNotes, studentId } = props;

  const filteredNotes = notes.filter((note) => note.studentId === studentId);

  return (
    <div>
      <h3>1-on-1 Notes</h3>
      <ul>
        {previousNotes.map((previousNote, index) => (
          <li key={index}>
            <strong>{previousNote.commenter}:</strong> {previousNote.comment}
          </li>
        ))}
        {filteredNotes.map((note, index) => (
          <li key={index}>
            <strong>{note.commenter}:</strong> {note.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
