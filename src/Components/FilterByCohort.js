import {useState} from 'react'

export default function FilterByCohort({studentsInfo, SchoolYear, StudentDetails}) {
  const [showcohort, setshowcohort] = useState(false)
  function toggleCohortDetails(){
    setshowcohort(!showcohort);
  }
  //console.log(SchoolYear)
  //console.log(StudentDetails)
  
 
    return(
        <div>
        <a href='#' onClick={toggleCohortDetails}>{!showcohort ? SchoolYear(): "Show less"}</a> 
           
          {studentsInfo.filter((student)=>{
            if(student.cohort.cohortCode === SchoolYear()){
                return(
                     <div>
                    {showcohort ? (
                        <div key={SchoolYear}>
                          <img src={ student.profilePhoto} alt={student.name}/>
                          <h3>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h3>
                          <p>{student.username}</p>
                          <p>Birthday: {new Date(student.dob).toDateString()}</p>
                          <StudentDetails student={student} />
                            
                
                          
                           </div>): null}
                           </div>
                )
            }

          })}
        </div>
          )
    
        }
    


