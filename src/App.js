import { useState } from "react";
import Table from 'react-bootstrap/Table';
import studentData from './data/data.json'



//Header component with title
function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-expand bg-body-tertiary  mb-5">
        <div className="container d-flex justify-content-center">
          <h1 className="fs-1 fw-bold" href="#">Student Dashboard</h1>
        </div>
      </nav>
    </header>
  );
}

function StartDateList({handleStudentFilter} ){
  const cohortList = [
    "Winter 2026",
    "Fall 2026",
    "Summer 2026",
    "Spring 2026",
    "Winter 2025",
    "Fall 2025",
    "Summer 2025",
    "Spring 2025"
  ]

  return(
    <div className="col-12 ">
    <h2>Choose a Class by Start Date</h2>
    <ul className="list-group list-group-flush">

      {/* this is definelty bad practices. a hack so that all students show up again when this is clicked is to refresh the url  */}
     <li className="list-group-item" onClick={()=> window.location.reload()} >All students</li>
     {cohortList.map((cohort, index)=><li key={index} id={cohort.split(" ").join("")}
     className="list-group-item" onClick={handleStudentFilter}>{cohort}</li>)}
    </ul>
  </div>
  )
}

function StudentList( {studentGroup}){
  return(
    <div className='container'>
      <h2 id="h2AllStudents">All Students</h2>
      <p> Total students: {studentGroup.length}</p>
      <div className='d-flex justify-content-center '>
      <div className=" row pb-3">
        {/* passed data to be decontructed in studentCard like props  */}
        {studentGroup.map((student) => <StudentCard key={student.id} {...student}/>)}
      </div>
    </div>
    </div>
  )

}

  // make the list item to show up
  // function OnTrackOrNot({studentData}){
  //   // const listItem = document.createElement("ListGroup.Item")
  //   // listItem.id = "onTrack"
  //   // listItem.textContent = "On Track to Graduate"
  //   // const listContainer = document.getElementById("textContainer")
  
  //   // if ( studentData.certifications.resume === true && studentData.certifications.linkedin === true &&
  //   //   studentData.certifications.github === true && studentData.certifications.mockInterview === true &&
  //   //   studentData. codewars.current.total > 600 ){
  //   //     return (
  //   //       listContainer.append(listItem)
  //   //       )
  //   // }

  //       const listItem = document.createElement("ListGroup.Item")
  //   listItem.id = "onTrack"
  //   listItem.textContent = "On Track to Graduate"
  //   // const listContainer = document.getElementById("textContainer")

  //   if (studentData.certifications.resume === true && studentData.certifications.linkedin === true &&
  //         studentData.certifications.github === true && studentData.certifications.mockInterview === true &&
  //         studentData.codewars.current.total > 600 ){
  //           return listItem
  //         }else{ console.log("not on track")}
  // }



// //Container that will hold student list
function StudentCard({ username, profilePhoto, names, dob, certifications, cohort, codewars, notes}){

  // function onTrackOrNot(){
  //   let showup = (certifications.resume === true && certifications.linkedin === true &&
  //     certifications.github === true && certifications.mockInterview === true &&
  //     codewars.current.total > 600)? 
  //     console.log("On track."):
  //   document.getElementById("onTrackOrNot").remove()

  //   if (
  //     (certifications.resume === true && certifications.linkedin === true &&
  //         certifications.github === true && certifications.mockInterview === true &&
  //         codewars.current.total > 600)? 
  //         console.log("On track."):
  //       document.getElementById("onTrackOrNot").remove()
  //   ){return document.getElementById("onTrackOrNot").remove()

  // }

  const fullName = names.preferredName + " " + names.middleName.charAt(0) + ". " + names.surname
  return(
    <div className="card mb-3" style={{ width: '55rem'}}>
  <div className="row g-0 row-cols-2">
  <img src={profilePhoto} className="rounded " style={{ width: '10rem', height: "10rem"}} alt="..."/>
    <div className="col-9">      
      <div className=" ">
      <div className="card-body">
        <h5 className="card-title">{fullName}</h5>
        <p className="card-text">{username}</p>
        <p className="card-text">Birthday: {dob}</p>
        {/* <button type="button" className="btn btn-dark">Show More</button> */}
        <MoreInfo certifications={certifications} cohort={cohort} codewars={codewars} notes={notes}/>
    </div>

      </div>
    </div>
  </div>
</div>
  )
}

//dropdown more info about student when button is pressed
function MoreInfo({certifications, cohort, codewars, notes}){
  const [showInfo, setShowInfo] = useState(false);
  const goalPercent = (codewars.current.total/codewars.goal.total)*100 
  const stringGoalPercent = goalPercent.toString()
  const splitGoalPercent = stringGoalPercent.split('')
  const correctGoalPercent = splitGoalPercent.slice(0, 3)

  function toggleInfo(){
    setShowInfo(!showInfo)
  }

  return (
    <>
    <button type="button" className="btn btn-dark pb-10" onClick={toggleInfo}>
      {!showInfo ? "Show more" : "Show less"}
      </button>
      {showInfo ? (<>

        <Table className="border border-top-0 pt-10" >
        <thead>
          <tr>
            <th>Codewars</th>
            <th>Grades</th>
            <th>Certifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current Total: {codewars.current.total}</td>
            <td>Assignments: {cohort.scores.assignments * 100}%</td>
            <td>Resume: {certifications.resume} {certifications.resume ? "✅" : "❌"}</td>
          </tr>
          <tr>
            <td>Last Week: {codewars.current.lastWeek}</td>
            <td>Projects: {cohort.scores.projects * 100}%</td>
            <td>Linkedin: {certifications.linkedin}{certifications.linkedin ? "✅" : "❌"}</td>
          </tr>
          <tr>
            <td>Goal: {codewars.goal.total}</td>
            <td>Assessments: {cohort.scores.assessments * 100}%</td>
            <td>mockInterview: {certifications.mockInterview}{certifications.mockInterview ? "✅" : "❌"}</td>
          </tr>
          <tr>
          <td>Percent of Goal Achieved: {correctGoalPercent}%</td>
          <td></td>
          <td>GitHub: {certifications.gitHub}{certifications.gitHub ? "✅" : "❌"}</td>
          </tr>
        </tbody>
      </Table>
       <ul className="list-group">
       <li className="list-group-item list-group-item-dark">Notes Posted</li>
       {/* this section of comment only works for the very first person on the list  */}
         {/* <li className="list-group-item">• {notes[0].comment} -{notes[0].commenter}</li> */}
         <li className="list-group-item"></li>

       </ul>
       <ul className="list-group">
       <li className="list-group-item list-group-item-dark">1 on 1 Notes </li>
       </ul>
      <form>
        <div className="mb-3">
        <label className="form-label">Commenter Name</label>
        <input type="text" className="form-control" />
       </div>
        <div className="mb-3">
        <label className="form-label">Comment</label>
        <input type="text" className="form-control" />
       </div>
         <button type="submit" className="btn btn-dark">Submit</button>
       </form>
      </>
          ): null}        
    </>
  )
}



function App() {
  const [studentGroup, setStudentGroup] = useState(studentData);
  function handleStudentFilter(event){
    let cohortDate = event.currentTarget.id
    console.log(event.currentTarget.id);
     //change h2 all students to the cohort chosen
    document.querySelector(`#h2AllStudents`).innerHTML = `${cohortDate.slice(0, -4 ) + " " + cohortDate.slice(-4)}`

    let filteredStudents = studentGroup.filter((students) => {
      return (
        students.cohort.cohortCode.includes(cohortDate)
      )})
      setStudentGroup(filteredStudents)
  }

  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <aside className='col-3'>
          <StartDateList handleStudentFilter={handleStudentFilter} />
          </aside>
          <main className='col-9'>
          <StudentList studentData={studentData} studentGroup={studentGroup} 
          handleStudentFilter={handleStudentFilter}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
