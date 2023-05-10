import React, {useState} from "react";
import data from './data/data.json'


function NavBar() {
  return (
    <div className="navBar">
      <nav>
        <h1>Student Dashboard</h1>
      </nav>
    </div>
  );
}

// function handleSortedElement() {
//   return (

//   )
// }

// function handleFilteredCohort () {
  
//   return 

// }



function DisplayCohortCode() {

  return (
    <>
      <div className="display-cohortcode">
        <aside>
          <h3> All Students</h3>
          {/* <p>
            <span>Total Students:</span>
            {data.length}
          </p> */}
          {data.map(({ cohort: { cohortCode }, id }) => (
            <>
              <div key={id}>
                <p>
                  <span>
                    {" "}
                    {cohortCode
                    }{" "}
                  </span>
                </p>
              </div>
            </>
          ))}
        </aside>
      </div>
    </>
  );
}

function studentDetails() {


  return (
    <>
      <div className="studentdetails">
        {data.map(
          ({
            certifications: { github, linkedin, mockInterview, resume },
            codewars: { current, goal },
            cohort: { scores },
            id,
          }) => {
              <>
            <div className="certification">
              
              <h5>Certifications</h5>
               <ol>
               <li key={id}>
                 Resume: <span>{resume}</span>
               </li>
               <li>
                 Linkedin: <span>{linkedin}</span>
               </li>
               <li>
                 Github: <span>{github}</span>
               </li>
               <li>
                 MockInterview: <span>{mockInterview}</span>
               </li>
                </ol>
             </div>;
            
                <div className="codewars">
                  <h5>Codewars</h5>
                   
               <li key={id}>
                 CurrentTotal: <span>{current.total}</span>
               </li>
               <li>
                 Last Week: <span>{current.lastWeek}</span>
               </li>
               <li>
                 Goal: <span>{goal.total}</span>
                </li>
                </div>
                

            <div className="cohort">
               <h5>Cohort</h5>
                 <ol>
               <li key={id}>
                 Assignments: <span>{scores.assignments}</span>
               </li>
               <li>
                 Assessments: <span>{scores.assessments}</span>
               </li>
               <li>
                 Projects: <span>{scores.projects}</span>
               </li>
                </ol> 
            </div>
            </>

          }
        )}
      </div>
    </>
  );
}

function DisplayStudent() {

  
  
  return (
    <>
      <div className="displayStudent">
        <h3> All Students</h3>

        <p>
          <span>Total Students:</span>
          {data.length}
        </p>

        {data.map(
          ({
            names: { preferredName, middleName, surname },
            username,
            dob,
            id,
            profilePhoto,
          }) => (
            <>
              <div key={id}>
                {" "}
                <p>
                  {preferredName} {middleName} {surname}
                  <img src={profilePhoto} alt="..." />
                </p>
                <p>
                  <span>{username}</span>
                </p>
                <p>
                  <span>
                    <span>Birthday: </span> {dob}
                  </span>
                </p>
                <div>
                  <button className="btn" onClick={() =>{ studentDetails()}} >Show more
                  {/* {showMore ? "Show less" : "Show more"} */}
                  </button>
                </div>
              </div>
            </>
            // }
          )
        )}
      </div>
    </>
  );
}



function App() {
  
 console.log(data)


  //  console.log(data[0].cohort.cohortCode.replaceAll()))
  
  // console.log(data[0].sort(cohort.cohortCode(handleSortedList)));

  return (
    <div className="App">
      <NavBar />
      <DisplayCohortCode />
      <DisplayStudent />
      {/* <handleFilteredCohort /> */}
    </div>
    
  );
}

export default App;
