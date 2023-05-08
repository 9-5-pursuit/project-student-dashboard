import { useState } from 'react'
import Student from './Student'

export default function StudentList({ studentData }) {
    return (
        <div>
            <h2>All Students</h2>
            <p>Total Students: 0</p>
            <ul>
                {studentData.map((student) => {
                    return (
                        <Student student={student}/>
                    )
                })}
            </ul>
        </div>
    )
}