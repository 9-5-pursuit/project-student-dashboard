import React from 'react'

function GradTrack(student) {
  
  return (
    <div>
     <ul className='code-wars'>
        Codewars:
        <li>Current Total: Value </li>
        <li>Last Week: Value</li>
        <li>Goal: Value</li>
        <li>Percent of Goal Achieved: XX%</li>
     </ul>
     <ul className="scores">
        <li>Assignments: XX%</li>
        <li>Projects: XX%</li>
        <li>Assessments: XX%</li>
     </ul>
     <ul className="certificates">
        <li>Resume: Boolean</li>
        <li>Linked: Boolean</li>
        <li>Mock Interview:Boolean</li>
        <li>GitHub: Boolean </li>
     </ul>
    </div>
  )
}

export default GradTrack