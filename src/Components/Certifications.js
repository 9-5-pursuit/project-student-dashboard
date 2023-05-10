import React from "react";

function Certifications({ certificatiions }) {
  const resume = certificatiions.resume;
  const linkedin = certificatiions.linkedin;
  const github = certificatiions.github;
  const mockInterview = certificatiions.mockInterview;
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
