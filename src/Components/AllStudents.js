import React from 'react'
import { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { v1 as generateId } from 'uuid'
function AllStudents({ data }) {

    const [index, setIndex] = useState(null);
    const [Name, setName] = useState('');
    const [Comment, setComment] = useState('');
    const [id, setId] = useState('')
    const [form, setForm] = useState({});
    const [note, setNote] = useState(false)
    const [hovered, setHovered] = useState(null);

    var num = null

    useEffect(() => {
        setIndex(null)
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Name || !Comment) return
        //store form data in state form object
        //prevents duplicate Notes
        setForm((prevState) => ({ ...prevState, [id]: [...new Set([...(prevState[id] || []), Name + ' says, "' + Comment + '"'])] }))
        setName('')
        setComment('')

    };

    function makeDate(args) {
        const dateParts = args.split("/");
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndex = parseInt(dateParts[0]) - 1;
        const day = parseInt(dateParts[1]);
        const year = parseInt(dateParts[2]);
        const outputDate = monthNames[monthIndex] + " " + day + ", " + year;
        return outputDate;
    }

    function status(args) {
        if (
            args.certifications.resume && args.certifications.linkedin && args.certifications.github
            && args.certifications.mockInterview && args.codewars.current.total > 600
        ) return 'On Track to Graduate';
        else return ''
    }

    function studentScore(args) {
        num = Math.round((args['codewars']['current']['total'] / args['codewars']['goal']['total']) * 100)
    }

    const handleCardExpand = (args, item) => {
        setIndex(index === args ? null : args);
        //handle if notes already exist is datajson
        if (item['notes'].length) setNote(true)
        else setNote(false)
    };

    const handleMouseEnter = (args) => {
        setHovered(args);
      };

    return (
        <>
            {data.map((item, i) => {
                studentScore(item)
                return (
                    <div onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => setHovered(null)} className={hovered===i ? 'card border-warning my-1 border-3' : "card border-success my-1"} key={item.id}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={item['profilePhoto']} className="post-image-w p-2" alt={item.names.preferredName} />
                            </div>
                            <div className="col-md-4 px-0">
                                <div className="card-body">
                                    <h5 className="card-title">{Object.values(item['names']).join(' ')}</h5>
                                    <p className="card-text">{item['username']}</p>
                                    <p className="card-text"><span className='text-success'>Birthday:</span> {makeDate(item['dob'])}</p>
                                    <button type='button' className="btn btn-link text-success" onClick={() => { handleCardExpand(i, item); setId(item.id); }}>{index === i ? 'Show Less..' : 'Show More..'}</button>
                                </div>
                            </div>
                            <div className="col-md-4 px-0">
                                <div className='card-body'>
                                    <h5 className="card-title text-success">{status(item)}</h5>
                                </div>
                            </div>
                        </div>
                        {index === i && (
                            <>
                                <div className="card m-1 border-success" id='sinfo' style={{ width: 'fit-content' }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <h6 className="card-subtitle">Codewars:</h6>
                                                <br />
                                                <p><span className='text-success'>Current Total:</span> {item['codewars']['current']['total']}</p>
                                                <p><span className='text-success'>Last Week:</span> {item['codewars']['current']['lastWeek']}</p>
                                                <p><span className='text-success'>Goal:</span> {item['codewars']['goal']['total']}</p>
                                                <p><span className={num >= 100 ? 'text-success' : (num >= 50 && num < 100) ? 'text-warning' : num < 50 ? 'text-danger' : ''}>Percent of Goal Achieved:</span> {num}%</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <h6 className="card-subtitle">Scores</h6>
                                                <br />
                                                <p><span className='text-success'>Assignments:</span> {item['cohort']['scores']['assignments'] * 100}%</p>
                                                <p><span className='text-success'>Projects:</span> {item['cohort']['scores']['projects'] * 100}%</p>
                                                <p><span className='text-success'>Assessments:</span> {item['cohort']['scores']['assessments'] * 100}%</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <h6 className="card-subtitle" id='cert'>Certifications</h6>
                                                <br />
                                                <p><span className='text-success'>Resume:</span> {item['certifications']['resume'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                                <p><span className='text-success'>LinkedIn:</span> {item['certifications']['linkedin'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                                <p><span className='text-success'>Mock Interview:</span> {item['certifications']['mockInterview'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                                <p><span className='text-success'>GitHub:</span> {item['certifications']['github'] ? (<FaCheck />) : (<i className="fs-1 text-danger">x</i>)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card m-2">
                                    <div className="card-body">
                                        <h5 className="card-title">1-on-1 Notes</h5>
                                        <form onSubmit={(e) => handleSubmit(e)}>
                                            <div className="mb-3">
                                                <label htmlFor="cName" className="form-label">Commenter Name</label>
                                                <input type="text" className="d-inline w-50 mx-2" id="cName" value={Name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="comment" className="form-label">Comment</label>
                                                <input type="text" className="d-inline w-50 mx-2" id="comment" value={Comment} onChange={(e) => setComment(e.target.value)} />
                                            </div>
                                            <button type="submit" className="btn btn-success">Add Note</button>
                                        </form>
                                    </div>
                                    <ul>
                                        {note && item['notes'].map(item => <li key={generateId()}>{item['commenter'] + ' says, ' + item['comment']}</li>)}
                                        {form[id] && (
                                            form[id].map((item) => {
                                                return <li key={generateId()}>
                                                    {item}
                                                </li>
                                            })
                                        )}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>

                )
            })}

        </>
    )
}

export default AllStudents