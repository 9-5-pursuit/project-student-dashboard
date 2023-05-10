import React, { useState } from "react";
import { v1 as generateUniqueID } from "react-uuid";

function Notes({ thisStudent }) {
  const notesArr = thisStudent[0].notes;

  // state for notes
  const [comment, setComment] = useState(notesArr);

  // state for new comment
  const [newComment, setNewComment] = useState({
    commenter: "",
    comment: "",
  });

  // state for button
  const [button, setButton] = useState(false);

  // fn for handling user comments
  function handleUserComment(event) {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  }

  function addComment() {
    const latestComment = {
      commenter: newComment.commenter,
      comment: newComment.comment,
    };
    notesArr.push(latestComment);
    // setComment([latestComment, ...thisStudent[0].notes])
  }

  function resetForm() {
    setNewComment({
      commenter: "",
      comment: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addComment();
    resetForm();
  }

  return (
    <div className="notes">
      <h4>1-on-1 Notes</h4>
      <div className="form">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            value={newComment.comment}
            name="comment"
            onChange={(event) => {
              handleUserComment(event);
            }}
          />
          <br />
          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            id="comment"
            value={newComment.comment}
            name="comment"
            onChange={(event) => {
              handleUserComment(event);
            }}
          />
          <br />

          <input
            className="submitButton"
            type="submit"
            value=" Add Note"
            style={{
              color: button ? "black" : "white",
              backgroundColor: button ? "white" : "rgb(61, 128, 61)",
            }}
            onMouseEnter={() => {
              setButton(true);
            }}
            onMouseLeave={() => {
              setButton(false);
            }}
          />
        </form>
      </div>
      <ul>
        {comment.map(({ comment, commenter }) => (
          <li key={generateUniqueID()}>
            {commenter} says, "{comment}"
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
