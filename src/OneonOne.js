import React from "react";

function OneonOne() {
  return (
    <div>
      <h3>1-on-1 Notes</h3>

      <form>
        <label htmlFor="commenter-name">Commenter Name</label>
        <input id="commenter-name" type="text" />
        <label htmlFor="comment" type="text">
          Comment
        </label>
        <input id="comment" type="text" />
        <button id="submit" type="submit">
          Add Notes
        </button>
      </form>

      <ul>
        <li className="comments">commenter name says,'insert comment here'</li>
      </ul>
    </div>
  );
}

export default OneonOne;
