import React, { useState } from "react";

function OneonOne() {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommenterNameChange = (event) => {
    setCommenterName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commenterName && comment) {
      const newComment = {
        commenterName,
        comment,
      };
      setComments([...comments, newComment]);
      setCommenterName("");
      setComment("");
    }
  };

  return (
    <div>
      <h3>1-on-1 Notes</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="commenter-name" className="form-label">
            Commenter Name
          </label>
          <input
            id="commenter-name"
            className="form-control"
            type="text"
            value={commenterName}
            onChange={handleCommenterNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <input
            id="comment"
            className="form-control"
            type="text"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <button
          id="submit"
          className="btn btn-primary"
          type="submit"
          style={{ backgroundColor: "#007bff", color: "#fff" }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#114769")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Add Notes
        </button>
      </form>

      <ul className="mt-3">
        {comments.map((comment, index) => (
          <li className="comments" key={index}>
            {comment.commenterName} says, '{comment.comment}'
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OneonOne;
