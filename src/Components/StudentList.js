import { useState } from 'react'
import Student from './Student'

export default function StudentList({ studentData, readableCohort }) {
    return (
        <div>
            <h2>{readableCohort}</h2>
            <p>Total Students: {studentData.length}</p>
            <ul>
                {studentData.map((student) => {
                    return (
                        <Student student={student} key={student.id}/>
                    )
                })}
            </ul>
        </div>
    )
}