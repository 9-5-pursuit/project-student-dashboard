import { useState } from 'react'
import { v4 as generateUniqueID } from 'uuid'
import greenCheck from '../images/checkmark-png-5.png'
import redX from '../images/round-cross-mark-symbol-with-transparent-background-free-png.webp'

export default function StudentDetails({ student }) {
    const [notes, setNotes] = useState([])
    const [comment, setComment] = useState("")
    const [commenter, setCommenter] = useState("")

    function addNote() {
        let noteString = `${commenter} says, "${comment}"`

        setNotes([...notes, noteString])
    }

    let goalPercent = Math.floor((student.codewars.current.total / student.codewars.goal.total) * 100)

    let percentageStyle = {
        color: "red"
    }

    if (goalPercent >= 100) {
        percentageStyle.color = "green"
    } else if (goalPercent >= 50) {
        percentageStyle.color = "yellow" 
    } else {
        percentageStyle.color = "red"
    }

    return (
        <>
            <div className="studentDetails">
                <div className='codewars'>
                    <h3>Codewars:</h3>
                    <p>Current Total: {student.codewars.current.total}</p>
                    <p>Last Week: {student.codewars.current.lastWeek}</p>
                    <p>Goal: {student.codewars.goal.total}</p>
                    <p>Percent of Goal Achieved: <span style={percentageStyle}>{goalPercent}%</span></p>
                </div>

                <div className='scores'>
                    <h3>Scores</h3>
                    <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                    <p>Projects: {student.cohort.scores.projects * 100}%</p>
                    <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                </div>

                <div className='certifications'>
                    <h3>Certifications</h3>
                    <p>Resume: {student.certifications.resume ? <img src={greenCheck} alt="green check"/> : <img src={redX} alt="red x"/>}</p>
                    <p>LinkedIn: {student.certifications.linkedin ? <img src={greenCheck} alt="green check"/> : <img src={redX} alt="red x"/>}</p>
                    <p>Mock Interview: {student.certifications.mockInterview ? <img src={greenCheck} alt="green check"/> : <img src={redX} alt="red x"/>}</p>
                    <p>GitHub: {student.certifications.github ? <img src={greenCheck} alt="green check"/> : <img src={redX} alt="red x"/>}</p>
                </div>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                addNote()
                e.target.reset()
            }} className="notes">
                <h4>1-on-1 Notes</h4>
                <fieldset>
                    <label>Commenter Name</label>
                    <input type="text" id="commenter" onChange={(e) => {
                        setCommenter(e.target.value)
                    }}/><br />

                    <label>Comment</label>
                    <input type="text" id="comment" onChange={(e) => {
                        setComment(e.target.value)
                    }}/><br />

                    <button type="submit">Add Note</button>
                </fieldset>
                
                <ul>
                    {notes.map((note) => {
                        return (
                            <li key={generateUniqueID()}>{note}</li>
                        )
                    })}
                </ul>
            </form>
        </>

    )
}