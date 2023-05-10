import React, { useState } from "react";
import uuid from "react-uuid";

function Notes({ thisStudent }) {
  const notesArr = thisStudent[0].notes;

  // state for notes/comments
  const [comment, setComment] = useState(notesArr);

  // state for new comment
  const [newComment, setNewComment] = useState({
    commenter: "",
    comment: "",
  });

  // state for button
  const [button, setButton] = useState(false);

  // fn for handling user comments
  function handleUserComment(e) {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  }

  function addComment() {
    const latestComment = {
      commenter: newComment.commenter,
      comment: newComment.comment,
    };
    notesArr.push(latestComment);
  }
  // fn comment form reset
  function resetForm() {
    setNewComment({
      commenter: "",
      comment: "",
    });
  }
  // fn submit
  function handleSubmit(event) {
    event.preventDefault();
    addComment();
    resetForm();
  }

  return (
    <div className="Notes">
      <h4>1-on-1 Notes</h4>
      <div className="form">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <label htmlFor="commenter">Commenter:</label>
          <input
            type="text"
            id="commenter"
            value={newComment.commenter}
            name="commenter"
            onChange={(e) => {
              handleUserComment(e);
            }}
          />
          <br />
          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            id="comment"
            value={newComment.comment}
            name="comment"
            onChange={(e) => {
              handleUserComment(e);
            }}
          />
          <br />

          <input
            className="submitButton"
            type="submit"
            value=" Add Note"
            style={{
              color: button ? "blue" : "white",
              backgroundColor: button ? "white" : "blue",
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
          <li key={uuid}>
            {commenter} says, "{comment}"
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
