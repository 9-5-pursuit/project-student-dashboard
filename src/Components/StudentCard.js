import CardTable from "./CardTable";
import { useState } from "react";
import CardForm from "./CardForm";
export default function StudentCard({ data }) {
  const [showAdditional, setShowAdditional] = useState(false);
  function toggleAdditional() {
    setShowAdditional(!showAdditional);
  }
  /*data needed
    1. Name dataPath (item.names(preferredName, middleName[0],surname));
    2. Email dataPath (item.username)
    3. Birthday dataPath {Formatting needed here} (item.dob)
    4. Card image (item.profilePhoto)
    After Show More is clicked =>
    5. Table (CodeWars, Scores, Certification) {item.certifications ,item.codewars , item.goal}
    */

  //---------------------------------------------------------//
  const notesData = data.notes;
  const [notes, setNotes] = useState(notesData);
  //-----------------------------------------------------------//
  const email = data.username;
  const profilePhoto = data.profilePhoto;
  const studentName = `${data.names.preferredName} ${data.names.middleName[0]}. ${data.names.surname}`;
  const localCwCurrent = data.codewars.current.total;
  const bDay = new Date(data.dob).toDateString();
  //   console.log(bDay);
  //   console.log(typeof bDay);
  const refCert = data.certifications;

  //const studentNotes = data.notes.commenter;
  //----------------------------------------------------------------------//
  //console.log(data.notes);
  function trackSuccess(arr, codewarsCurrent) {
    if (Object.values(arr).includes(false)) {
      return (
        <div className="alert alert-danger" role="alert">
          Not on track to graduate!
        </div>
      );
    } else if (Object.values(arr).includes(!false) && codewarsCurrent > 600) {
      return (
        <div className="alert alert-success" role="alert">
          On track to graduate.
        </div>
      );
    } else {
      return (
        <div className="alert alert-danger" role="alert">
          Not on track to graduate!
        </div>
      );
    }
  }

  //console.log("================================");
  //console.log(data);

  return (
    <div className="card mb-3 " style={{ maxwidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={profilePhoto}
            className="img-fluid rounded-start"
            alt={data.id}
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="car-title">{studentName}</h5>
            <p className="card-text">{email}</p>
            <p className="card-text">
              <small className="text-body-secondary">Birthday: {bDay}</small>
            </p>
            {trackSuccess(refCert, localCwCurrent)}
            <p className="card-text">
              <button
                type="button"
                className="btn btn-outline-success link-opacity-75-hover"
                onClick={toggleAdditional}
              >
                {!showAdditional ? "Show More" : "Show Less"}
              </button>
            </p>
            {showAdditional ? (
              <>
                <CardTable data={data} />
                <CardForm setNotes={setNotes} notes={notes} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
