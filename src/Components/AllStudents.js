import React from 'react'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
function AllStudents({ data }) {

    const [index, setIndex] = useState(null)

    function makeDate(args) {
        const dateParts = args.split("/");
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndex = parseInt(dateParts[0]) - 1;
        const day = parseInt(dateParts[1]);
        const year = parseInt(dateParts[2]);
        const outputDate = monthNames[monthIndex] + " " + day + ", " + year;
        return outputDate;
    }

    const handleCardExpand = (args) => {
        setIndex(index === args ? null : args);
    };
    return (
        <>
            {data.map((item, i) => {
                return (
                    <div className="card border-success my-1" key={item.id}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={item['profilePhoto']} className="post-image-w p-2" alt="Your image alt text here" />
                            </div>
                            <div className="col-md-8 px-0">
                                <div className="card-body">
                                    <h5 className="card-title">{Object.values(item['names']).join(' ')}</h5>
                                    <p className="card-text">{item['username']}</p>
                                    <p className="card-text"><span className='text-success'>Birthday:</span> {makeDate(item['dob'])}</p>
                                    <a style={{ cursor: 'pointer' }} className="pointer" onClick={() => { handleCardExpand(i) }}>{index === i ? 'Show Less..' : 'Show More..'}</a>
                                </div>
                            </div>
                        </div>
                        {index === i && (
                            <div className="card m-1" id='sinfo' style={{ width: 'fit-content', borderColor: 'purple', borderWidth: 'thick' }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h6 className="card-subtitle py-1">Codewars:</h6>
                                            <br />
                                            <p><span className='text-success'>Current Total:</span> {item['codewars']['current']['total']}</p>
                                            <p><span className='text-success'>Last Week:</span> {item['codewars']['current']['lastWeek']}</p>
                                            <p><span className='text-success'>Goal:</span> {item['codewars']['goal']['total']}</p>
                                            <p><span className='text-success'>Percent of Goal Achieved:</span> {((item['codewars']['current']['total'] / item['codewars']['goal']['total']) * 100).toFixed(0)}%</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h6 className="card-subtitle py-1">Scores</h6>
                                            <br />
                                            <p><span className='text-success'>Assignments:</span> {item['cohort']['scores']['assignments'] * 100}%</p>
                                            <p><span className='text-success'>Projects:</span> {item['cohort']['scores']['projects'] * 100}%</p>
                                            <p><span className='text-success'>Assessments:</span> {item['cohort']['scores']['assessments'] * 100}%</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h6 className="card-subtitle py-1" id='cert'>Certifications</h6>
                                            <br />
                                            <p><span className='text-success'>Resume:</span> {item['certifications']['resume'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                            <p><span className='text-success'>LinkedIn:</span> {item['certifications']['linkedin'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                            <p><span className='text-success'>Mock Interview:</span> {item['certifications']['mockInterview'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                            <p><span className='text-success'>GitHub:</span> {item['certifications']['github'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
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