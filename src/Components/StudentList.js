import { useState } from 'react'
import Student from './Student'

export default function StudentList() {
    return (
        <div>
            <h2>All Students</h2>
            <p>Total Students: 0</p>
            <ul>
                <Student />
            </ul>
        </div>
    )
}