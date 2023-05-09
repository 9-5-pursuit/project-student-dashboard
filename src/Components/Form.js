import React from "react";
import { useState } from "react";


const Form = (student) => {
  const [userInput, setUserInput] = useState({ commenter: '', comment: '' });

  return (
    <div className="notes">
      <h4>1-on-1 Notes</h4>
      <form className="form">
        <label htmlFor="commentor-name-">Commentor Name</label>
        <input type="text" name="commentor-name" id="commentor-name" />
        <label htmlFor="comment">
          Comment
          <input type="text" name="comment" id="comment" />
        </label>
        <button>Add Note</button>
      </form>
    </div>
  );
};
export default Form;
