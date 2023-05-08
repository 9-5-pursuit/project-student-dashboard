import { useState } from "react";

// imported to style cards
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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


// function resetAllStudents(){
//   window.location.reload();
// }

function StudentList( {studentGroup}){
  return(
    <div className='container'>
      <h2>All Students</h2>
      <p> Total students: {studentGroup.length}</p>
      <div className='d-flex justify-content-center '>
      <div className=" row row-cols-3 pb-3">
        {/* passed data to be decontructed in studentCard like props  */}
        {studentGroup.map((student) => <StudentCard key={student.id} {...student}/>)}
      </div>
    </div>
    </div>
  )

}
// //Container that will hold student list
function StudentCard({ username, profilePhoto, names, dob }){

  const fullName = names.preferredName + " " + names.middleName.charAt(0) + ". " + names.surname
  return(
    <div className='col pb-5'>
      <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={profilePhoto} />
      <Card.Body>
        <Card.Title>{fullName}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{username}</ListGroup.Item>
        <ListGroup.Item>Birthday: {dob}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <button type="button" className="btn btn-dark">Show More</button>
      </Card.Body>
    </Card>
    </div>
  )
}





function App() {
  const [studentGroup, setStudentGroup] = useState(studentData);
  // console.log(studentGroup);

  function handleStudentFilter(event){
    let cohortDate = event.currentTarget.id
    console.log(event.currentTarget.id);
    let filteredStudents = studentGroup.filter((students) => {
      return (
        students.cohort.cohortCode.includes(cohortDate)
      )})
      // console.log(filteredStudents);
  
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
          <StudentList studentData={studentData} studentGroup={studentGroup} handleStudentFilter={handleStudentFilter}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
