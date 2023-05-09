import React, { useState } from "react";

function Students({ student }) {
    const [showMore, setShowMore] = useState(false);
    const [newComment, setNewComment] = useState({
        commenter: "",
        comment: "",
    });
    const [comments, setComments] = useState(student.notes);
    function toggleShowMore() {
        setShowMore(!showMore);
    }

    function handleTextChange(e) {
        setNewComment({
            ...newComment,
            [e.target.id]: e.target.value,
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        setComments((prevState) => [newComment, ...prevState]);
        setNewComment({
            commenter: "",
            comment: "",
        });
    }
    let { username, dob } = student;
    const date = new Date(dob);
    const options = { month: "long" };
    let month = new Intl.DateTimeFormat("en-US", options).format(date);
    let birthday = month + " " + date.getDate() + ", " + date.getFullYear();
    let name =
        student.names.preferredName +
        " " +
        student.names.middleName.charAt(0) +
        ". " +
        student.names.surname;
    let perc = Math.floor(
        (student.codewars.current.total / student.codewars.goal.total) * 100
    );
    let color = "";
    if (perc < 50) {
        color = "text-danger";
    } else if (perc >= 50 && perc < 100) {
        color = "text-warning";
    } else {
        color = "text-success";
    }
    let assignments = student.cohort.scores.assignments * 100;
    let projects = student.cohort.scores.projects * 100;
    let assessments = student.cohort.scores.assessments * 100;
    let resume = student.certifications.resume;
    let linkedin = student.certifications.linkedin;
    let github = student.certifications.github;
    let mockInterview = student.certifications.mockInterview;
    return (
        <>
            <div className="container card rounded-0 mb-3 border-success">
                <div className="row g-0">
                    <div className="p-4 col-md-2">
                        <img
                            src={student.profilePhoto}
                            className="sized-img rounded"
                            alt={student.username}
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="mt-4">
                            <p className="card-text m-0">{name}</p>
                            <p className="m-0 font-weight-normal">{username}</p>
                            <p className="card-text">
                                <span className="text-success">Birthday: </span>
                                {birthday}
                            </p>
                            <button
                                className="btn btn-link text-success"
                                onClick={toggleShowMore}
                            >
                                {!showMore ? "Show More..." : "Show Less..."}
                            </button>
                        </div>
                    </div>
                    <div className="col mt-3">
                        {student.certifications.resume &&
                        student.certifications.linkedin &&
                        student.certifications.github &&
                        student.certifications.mockInterview &&
                        student.codewars.current.total > 600 ? (
                            <div className="text-success">
                                On Track to Graduate
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                {showMore ? (
                    <>
                        <div className="container d-flex flex-row">
                            <div className="width-45">
                                <h4>Codewars:</h4>
                                <p>
                                    Current Total:{" "}
                                    {student.codewars.current.total}
                                </p>
                                <p>
                                    Last Week:{" "}
                                    {student.codewars.current.lastWeek}
                                </p>
                                <p>Goal: {student.codewars.goal.total}</p>
                                <p>
                                    Percentage of Goal Achieved:{" "}
                                    <span className={color}>{perc}%</span>
                                </p>
                            </div>
                            <div className="width-35">
                                <h4>Scores</h4>
                                <p>Assignments: {assignments}%</p>
                                <p>Projects: {projects}%</p>
                                <p>Assessments: {assessments}%</p>
                            </div>
                            <div className="width-20">
                                <h4>Certifications</h4>
                                <p>
                                    Resume:{" "}
                                    {resume ? <>&#9989;</> : <>&#10060;</>}
                                </p>
                                <p>
                                    LinkedIn:{" "}
                                    {linkedin ? <>&#9989;</> : <>&#10060;</>}
                                </p>
                                <p>
                                    Mock Interview:{" "}
                                    {mockInterview ? (
                                        <>&#9989;</>
                                    ) : (
                                        <>&#10060;</>
                                    )}
                                </p>
                                <p>
                                    GitHub:{" "}
                                    {github ? <>&#9989;</> : <>&#10060;</>}
                                </p>
                            </div>
                        </div>

                        <hr className="border border-success border-1 opacity-75" />
                        <div className="ms-4">
                            <form>
                                <h3 className="fs-6 fw-bold">1-On-1 Notes</h3>
                                <div className="border border-black p-3">
                                    <div className="mb-3">
                                        Commenter Name{" "}
                                        <input
                                            id="commenter"
                                            type="text"
                                            onChange={handleTextChange}
                                            value={newComment.commenter}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        Comment{" "}
                                        <input
                                            id="comment"
                                            type="text"
                                            onChange={handleTextChange}
                                            value={newComment.comment}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="submit"
                                            value="Add Note"
                                            onClick={handleSubmit}
                                        />
                                    </div>
                                </div>
                            </form>
                            <div>
                                <ul>
                                    {comments.map((e) => {
                                        return (
                                            <li key={e}>
                                                {e.commenter} says, "{e.comment}
                                                "
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default Students;
