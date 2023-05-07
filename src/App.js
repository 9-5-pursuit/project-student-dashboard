// import { useState } from "react";

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

function StartDateList(){
  const cohortList = [
    "Winter 2026",
    "Fall 2026",
    "Summer 2026",
    "Spring 2026",
    "Winter 2025",
    "Fall 2025",
    "Summer 2025",
    "Sping 2025"
  ]
  return(
    <div className="col-12 ">
    <h2>Choose a Class by Start Date</h2>
    <ul className="list-group list-group-flush">
     <li className="list-group-item">All students</li>
     {cohortList.map((cohort, index)=><li key={index} className="list-group-item">{cohort}</li>)}
    </ul>
  </div>
  )
}


function StudentList({studentData}){
  return(
    <div className='container'>
      <div className='d-flex justify-content-center '>
      <div className=" row row-cols-3 pb-3">
        {/* passed data to be decontructed in studentCard like props  */}
        {studentData.map((student) => <StudentCard key={student.id} {...student}/>)}
      </div>
    </div>
    </div>
  )

}
// //Container that will hold student list
function StudentCard({ username, profilePhoto }){
  return(
    <div className='col pb-5'>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={profilePhoto} />
      <Card.Body>
        <Card.Title>name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{username}</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>

  )

}

function App() {
  return (
    <div>
      <Header/>
      
      <div className='container'>
        <div className='row'>
          <aside className='col-4'>
          <StartDateList/>
          </aside>
          <main className='col-8'>
          <StudentList studentData={studentData}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
