import studentsInfo from './data/data.json'
import StudentDetails from './Components/StudentDetails'
import FilterByCohort from './Components/FilterByCohort'
import Studentform from './Components/Studentform'

function App() {
  //console.log(studentsInfo)

 
 function SchoolYear(){
 
  let cohortYear = []
  studentsInfo.forEach((student)=>{
     if(!cohortYear.includes(student.cohort.cohortCode)) {
         cohortYear.push(student.cohort.cohortCode)
     }
     
  });
      return cohortYear.map((year)=>(
      <li key={year}><button >{year}</button></li>
      ))
    //  console.log(cohortYear)
  // return cohortYear.filter((value, index)=>cohortYear.indexOf(value)===index)
 }
 //console.log(SchoolYear(studentsInfo))
//  function Birthday(){
//    studentsInfo.map((student)=>{
//    const store = new Date(Date.UTC(student.dob))(
//     <div key={student.id}>Birthday: {new Intl.DateTimeFormat('en-US',{dateStyle:'full'}.format(store))}</div>
//  )
   
//  })
 
// }
//  function filterByCohort(){
//       studentsInfo.filter((student) =>{
//         if (student.cohort.cohortCode === {SchoolYear}){
//           return(
           
//            <div key={student.id}>
//             <img src={student.profilePhoto} alt={student.name}/>
//             <h3>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h3>
//             <p>{student.username}</p>
//             <p>Birthday: {student.dob}</p>
//             <StudentDetails student={student} />
//             </div>
            
//           )
          
//         }
//    })
// }
 
 function studentCount(studentsInfo){
  let counter = 0
  
  for (let student of studentsInfo){
    
    if  (student.id){
      counter++
    } 
    return counter

  }
 }
 
 
  return (
    <div>
      <header>
      <nav className="navbar bg-success bg-body-tertiary">
    <div className="container-fluid">
       <span className="navbar-brand mb-0 h1">Student Dashboard</span>
  </div>
</nav>
      </header>
      <div className='container text-center'>
        <div className='row'>
        <div className='col-8'>
        <h2>All Students</h2>
        <p>Total Students:{studentCount}</p>
        {studentsInfo.map((student)=>(
          <div className='card' key={student.id}>
          <img src={student.profilePhoto} className="card-img-top" alt={student.name}/>
         <div className='card-body'>
          <h3 className='card-title'>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h3>
          <p className='card-text'>{student.username}</p>
          <p className='card-text'>Birthday: {new Date(student.dob).toDateString()}</p>
          <StudentDetails student={student} />
          </div>
          
           </div>
       ))}
        </div>
        <div className='col-4'>
          <h2>Choose a Class by Start Date</h2>
          
          <ul>
          <li>All Students</li>
           
          <FilterByCohort studentsInfo={studentsInfo} SchoolYear={SchoolYear} StudentDetails={StudentDetails} />
          
          <Studentform />
          
          </ul>
        

        
        </div>

        </div>
      </div>
      
      
    </div>
  );
}

export default App;
