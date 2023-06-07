import React, { useState } from "react";

import "./OneToOne.css";

function OneToOne() {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");

  const [commentArray, setCommentArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let newCommentArray = [...commentArray, { commenterName, comment }];

    setCommentArray(newCommentArray);
    setCommenterName("");
    setComment("");
  }

  return (
    <div className="one-to-one-container">
      <h3>1-on-1 Notes</h3>
      <div className="one-to-one_form">
        <form onSubmit={handleSubmit}>
          <div className="one-to-one_input">
            <label>Commenter Name</label>
            <input
              type="text"
              onChange={(e) => setCommenterName(e.target.value)}
              value={commenterName}
            />
          </div>
          <div className="one-to-one_input">
            <label>Comment</label>
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </div>

          <button>Add Note</button>

          <ul className="one-to-one_ul">
            {commentArray.map((item, index) => {
              return (
                <li key={index}>
                  {item.commenterName} says {`"${item.comment}"`}
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default OneToOne;
