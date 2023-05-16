import React, { useState } from "react";
import { timestamp } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import { useDocument } from "../hooks/useDocument";
import Avatar from "../components/Avatar";

const CohortChat = () => {
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("cohorts");
  const { document } = useDocument("cohorts");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    console.log(commentToAdd);

    // await updateDocument({
    //   comments: [...document.comments, commentToAdd],
    // });

    // if (!response.error) {
    //   setNewComment("");
    // }
  };

  return (
    <div className="cohort-comment">
      <h4>Comments</h4>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
};

export default CohortChat;
