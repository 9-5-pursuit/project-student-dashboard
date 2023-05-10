import {useState} from 'react';


export default function StudentDetails({student}) {
  const [showDetails, setShowDetails] = useState(false)
   function toggleStudentDetails(){
    setShowDetails(!showDetails);
   }
  return (
        <>
        <a href='#'onClick={toggleStudentDetails}>
            {!showDetails ? "Show More..." : "Show Less" }
        </a>
        {showDetails ?(
            <div className='container text-center'>
            <div className='row' key = {student.id}>
            <div className='col'>
            <h4>Codewars:</h4>
                <ul>
                    <li>Current Total:{student.codewars.current.total}</li>
                    <li>Last Week:{student.codewars.current.lastWeek}</li>
                    <li>Goal:{student.codewars.goal.total}</li>
                    <li>Percent of Goal Achieved:{(student.codewars.current.total/student.codewars.goal.total*100).toFixed(0)}%</li>

                </ul>
                </div>
            <div className='col'>
            <h4>Scores</h4>
                <ul>
                    <li>Assignments:{student.cohort.scores.assignments * 100}%</li>
                    <li>projects:{student.cohort.scores.projects * 100}%</li>
                    <li>Assessments: {student.cohort.scores.assessments * 100}%</li>
                </ul>
                </div>
           <div className='col'>
            <h4>Certifications</h4>
                <ul>
                    <li>Resume:{student.certifications.resume ? '✅' : '❌'}</li>
                    <li>LinkedIn:{student.certifications.linkedin ? '✅' : '❌'}</li>
                    <li>Mock Interview:{student.certifications.mockInterview ? '✅' : '❌'}</li>
                    <li>GitHub:{student.certifications.github ? '✅' : '❌'}</li>
                </ul>
             </div>   
            </div>
            </div>
        ):null}

        
        </>
  )
}

 