import React from 'react'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
function AllStudents({ data }) {

    const [bool, setBool] = useState(false)
    const [index, setIndex] = useState(null)

    function makeDate(args) {
        const dateParts = args.split("/");
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndex = parseInt(dateParts[0]) - 1;
        const day = parseInt(dateParts[1]);
        const year = parseInt(dateParts[2]);
        const outputDate = monthNames[monthIndex] + " " + day + " " + year;
        return outputDate; // Output: "February 3 1979"

    }
    return (
        <>
            {data.map((item, i) => {
                return (
                    <div className="card border-success my-1" key={item.id}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={item['profilePhoto']} className="post-image-w p-2" alt="Your image alt text here" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{Object.values(item['names']).join(' ')}</h5>
                                    <p className="card-text">{item['username']}</p>
                                    <p className="card-text">Birthday: {makeDate(item['dob'])}</p>
                                    <a style={{ cursor: 'pointer' }} className="pointer" onClick={() => { setIndex(i); setBool(!bool) }}>{(index === i && bool) ? 'Show Less..' : 'Show More..'}</a>
                                </div>
                            </div>
                        </div>
                        {(index === i && bool) && (
                            <div className="card m-1" id='sinfo' style={{ width: 'fit-content', borderColor: 'purple', borderWidth: 'thick' }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h6 className="card-subtitle py-1">Codewars:</h6>
                                            <br />
                                            <p>Current Total: {item['codewars']['current']['total']}</p>
                                            <p>Last Week: {item['codewars']['current']['lastWeek']}</p>
                                            <p>Goal: {item['codewars']['goal']['total']}</p>
                                            <p>Percent of Goal Achieved: {((item['codewars']['current']['total'] / item['codewars']['goal']['total']) * 100).toFixed(0)}%</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h6 className="card-subtitle py-1">Scores</h6>
                                            <br />
                                            <p>Assignments: {item['cohort']['scores']['assignments'] * 100}%</p>
                                            <p>Projects: {item['cohort']['scores']['projects'] * 100}%</p>
                                            <p>Assessments: {item['cohort']['scores']['assessments'] * 100}%</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h6 className="card-subtitle py-1" id='cert'>Certifications</h6>
                                            <br />
                                            <p>Resume: {item['certifications']['resume'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                            <p>LinkedIn: {item['certifications']['linkedin'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                            <p>Mock Interview: {item['certifications']['mockInterview'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                            <p>GitHub: {item['certifications']['github'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                )
            })}

        </>
    )
}

export default AllStudents