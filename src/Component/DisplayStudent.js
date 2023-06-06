import React from 'react'
import moment from 'moment'
import Showmore from './ShowMore/showmore';
// import data from './data/data.json'

function DisplayStudent({ studentList }) {
  
  function FixingDob(dob) {
    let fixedDob = dob.split("/")
   fixedDob = moment(dob).format("MMMM D YYYY");
   return fixedDob;
  }

  function OntrackToGraduate(certs, codeWars) {

    let isOnTrack = true;

    for (let cert in certs) {
       
      if (!certs[cert]) {
        isOnTrack = false;
        return isOnTrack;
      }
    }

    for (let codeWar in codeWars) {
  
      if (codeWars[codeWar].total <= 600) {
        isOnTrack = false;
        return isOnTrack;
      }
    }

    return isOnTrack;
  }

  return (
    <section>
      <div className="displayStudent-container">
        <h2> All Students</h2>
        <p>
          Total Students:
          <span className="text-success">{studentList.length}</span>
        </p>

        {studentList.map(
          ({
            names: { preferredName, middleName, surname },
            username,
            dob,
            id,
            profilePhoto,
            codewars,
            certifications,
            cohort,
          }) => (
            <div key={id} className="student-profile .container ">
              <div className="photo .img-fluid.">
                <img src={profilePhoto} alt={preferredName} />
              </div>
              <did>
                <h3 className=".align-right">
                  {preferredName} {middleName[0]} {surname}
                </h3>
                <p>
                  <span>{username}</span>
                </p>
                <p>
                  <span className="text-success">Birthday: </span>{" "}
                  {FixingDob(dob)}
                </p>
                <Showmore
                  cohort={cohort}
                  certifications={certifications}
                  codeWars={codewars}
                />
              </did>
              <p className="ontrack-to-graduate-container">
                {OntrackToGraduate(certifications, codewars) && (
                  <span className="text-success">On Track to Graduate</span>
                )}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
export default DisplayStudent;