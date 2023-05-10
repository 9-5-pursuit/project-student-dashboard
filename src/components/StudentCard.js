import React, { useState } from "react";
import { Card, Col, ListGroup, Form, Button } from "react-bootstrap";

function StudentCard(props) {
  const { student } = props;
  const dob = new Date(student.dob).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [showMore, setShowMore] = useState(false);
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [notes, setNotes] = useState(student.notes || []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const calcCodewarsPercent = () => {
    const { current, goal } = student.codewars;
    const percent = (current.total / goal.total) * 100;
    return percent.toFixed(2);
  };

  const renderCodewarsStatus = () => {
    const percent = calcCodewarsPercent();
    if (percent >= 100) {
      return <span style={{ color: "green" }}>Achieved {percent}%</span>;
    } else if (percent >= 50) {
      return <span style={{ color: "orange" }}>Almost there {percent}%</span>;
    } else {
      return <span style={{ color: "red" }}>Needs improvement {percent}%</span>;
    }
  };

  const renderCertificationStatus = (status) => {
    if (status) {
      return <span style={{ color: "green" }}>✓</span>;
    } else {
      return <span style={{ color: "red" }}>✕</span>;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, { commenter, comment }]);
    setCommenter("");
    setComment("");
  };
  function getStudentStatus(student) {
    const certifications = student.certifications;
    const codewars = student.codewars;

    if (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      codewars.current.total > 600
    ) {
      return "On Track to Graduate";
    } else {
      return "Not On Track to Graduate";
    }
  }

  return (
    <Col md="4">
      <Card className="mb-4" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img
              src={student.profilePhoto}
              className="img-fluid rounded-start"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>
                {student.names.preferredName} {student.names.surname}
              </Card.Title>
              <Card.Text>{student.username}</Card.Text>
              <Card.Text>Birthday: {dob}</Card.Text>
              <Card.Text>{getStudentStatus(student)}</Card.Text>
              <Card.Text onClick={handleShowMore}>
                <small className="text-body-secondary">
                  {showMore ? "Hide" : "Show"} more
                </small>
              </Card.Text>
              {showMore && student.cohort && (
                <ListGroup>
                  <ListGroup.Item>
                    <h3>Score:</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Assignments Score:</b>{" "}
                    {student.cohort.scores.assignments * 100}%
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Projects Score:</b>{" "}
                    {student.cohort.scores.projects * 100}%
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Assessments Score:</b>{" "}
                    {student.cohort.scores.assessments * 100}%
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>CodeWars:</h3> {renderCodewarsStatus()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Col>
                      <b>CodeWars Points:</b> {student.codewars.current.total} /{" "}
                      {student.codewars.goal.total} ({calcCodewarsPercent()}%)
                    </Col>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Certifications:</h3>{" "}
                    {renderCertificationStatus(student.certifications.resume)}{" "}
                    Resume,{" |"}
                    {renderCertificationStatus(
                      student.certifications.linkedin
                    )}{" "}
                    LinkedIn,{" | "}
                    {renderCertificationStatus(
                      student.certifications.github
                    )}{" "}
                    GitHub,{" | "}
                    {renderCertificationStatus(
                      student.certifications.mockInterview
                    )}{" "}
                    Mock Interview
                  </ListGroup.Item>
                </ListGroup>
              )}
              <hr />
              <Form onSubmit={handleSubmit}>
                <h3>1 on 1 Notes:</h3>

                <Form.Group controlId="commenter">
                  <Form.Label>Commenter Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={commenter}
                    onChange={(event) => setCommenter(event.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="comment">
                  <Form.Label>Comment:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter your comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Note
                </Button>
                {notes.map((note, index) => (
                  <div key={index}>
                    <small className="text-muted">{note.commenter}: </small>
                    {note.comment}
                  </div>
                ))}
                <hr />
              </Form>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Col>
  );
}

export default StudentCard;
