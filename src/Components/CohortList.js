export default function CohortList({ filterStudents, filter, setFilter, sortedCohortList, setReadableCohort }) {
    let formattedCohorts = []

    sortedCohortList.forEach((cohortCode) => {
        let cohortCodeArr = cohortCode.split("")
        cohortCodeArr.splice(cohortCodeArr.length - 4, 0, " ")

        let formattedCohort = cohortCodeArr.join("")
        formattedCohorts.push(formattedCohort)
    })

    return (
        <div className="cohortList">
            <h2>Choose a Class by Start Date</h2>
            <ul style={{"listStyle": "none"}}>
                <li onClick={() => {
                    setFilter("")
                    filterStudents("")
                    setReadableCohort("All Students")
                    }}>All Students</li>
                {formattedCohorts.map((cohort) => {
                   return (
                    <li key={cohort} onClick={(e) => {
                        setFilter(e.target.textContent.split(" ").join(""))
                        filterStudents(e.target.textContent.split(" ").join(""))
                        setReadableCohort(cohort)
                    }}>{cohort}</li>
                   ) 
                })}
            </ul>
        </div>
    )
}