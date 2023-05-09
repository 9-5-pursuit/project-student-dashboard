import Student from './Student'

export default function StudentList({ studentData, readableCohort }) {
    return (
        <div className="studentList">
            <h2>{readableCohort}</h2>
            <p className='total'>Total Students: <span>{studentData.length}</span></p>
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