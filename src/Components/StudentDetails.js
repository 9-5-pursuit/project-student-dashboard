import { useState } from 'react'
import { v4 as generateUniqueID } from 'uuid'

export default function StudentDetails({ student }) {
    const [notes, setNotes] = useState([])
    const [comment, setComment] = useState("")
    const [commenter, setCommenter] = useState("")

    function addNote() {
        let noteString = `${commenter} says, "${comment}"`

        setNotes([...notes, noteString])
    }


    return (
        <>
            <div className="studentDetails">
                <div>
                    <h3>Codewars:</h3>
                    <p>Current Total: {student.codewars.current.total}</p>
                    <p>Last Week: {student.codewars.current.lastWeek}</p>
                    <p>Goal: {student.codewars.goal.total}</p>
                    <p>Percent of Goal Achieved: {(Math.floor((student.codewars.current.total / student.codewars.goal.total) * 100))}%</p>
                </div>

                <div>
                    <h3>Scores</h3>
                    <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                    <p>Projects: {student.cohort.scores.projects * 100}%</p>
                    <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                </div>

                <div>
                    <h3>Certifications</h3>
                    <p>Resume: {student.certifications.resume ? "Yes" : "No"}</p>
                    <p>LinkedIn: {student.certifications.linkedin ? "Yes" : "No"}</p>
                    <p>Mock Interview: {student.certifications.mockInterview ? "Yes" : "No"}</p>
                    <p>GitHub: {student.certifications.github ? "Yes" : "No"}</p>
                </div>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                addNote()
                e.target.reset()
            }}>
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