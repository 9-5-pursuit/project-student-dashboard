import React from "react";

function Certifications({ certifications }) {
  const resume = certifications.resume;
  const linkedin = certifications.linkedin;
  const github = certifications.github;
  const mockInterview = certifications.mockInterview;
  const x = <span aria-label="x">❌</span>;
  const check = <span aria-label="check">✅</span>;

  return (
    <div className="certifications">
      <h4>Certifications </h4>
      <p>
        <span>Resume: </span>
        {resume ? check : x}
      </p>
      <p>
        <span>Linkedin: </span>
        {linkedin ? check : x}
      </p>
      <p>
        <span>GitHub: </span>
        {github ? check : x}
      </p>
      <p>
        <span>Mock Interview: </span>
        {mockInterview ? check : x}
      </p>
    </div>
  );
}

export default Certifications;
