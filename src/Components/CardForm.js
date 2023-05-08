//import { useState } from "react";
export default function CardForm({ setNotes, notes }) {
  /* receive notes array from card */
  //const localNotes = data.notes;
  //console.log(localNotes);

  //const [notes, setNotes] = useState(localNotes);

  //Loop through the localNotes array and display the contents in a list
  //On submit grab the value of the both the inputs and update the array with those values
  //react will continue to show the contents of the array, even after submit
  // REMEMBER: GET SCREENSHOTS
  //---------------------------------//
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(newNotes);

    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    const createdNote = {
      [e.target[0].id]: e.target[0].value,
      [e.target[1].id]: e.target[1].value,
    };
    //console.log(createdNote);
    //setNewNotes({ createdNote });

    setNotes([...notes, createdNote]);

    // resetNotes();

    e.target[0].value = "";
    e.target[1].value = "";

    //setNewNotes({ ...newNotes, createdNote });
    //addNote();
    // console.log(newNotes);
    // setNotes(newNotes, ...notes);
    // console.log(notes);
    //resetNotes();
  }
  //   function resetNotes() {
  //     setNewNotes({ commenter: "", comment: "" });
  //   }

  //-----------------------------------//
  return (
    <div className="card-body">
      <h3>1-on-1 Notes</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="commenter" className="form-label">
            Commenter Name
          </label>
          <input type="text" className="form-control" id="commenter" />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <input type="text" className="form-control" id="comment" />
        </div>
        <button type="submit" className="btn btn-success">
          Add Note
        </button>
      </form>
      <ul>
        {notes.map((item, index) => {
          return (
            <li key={index}>
              {item.commenter} says, {item.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
