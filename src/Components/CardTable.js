export default function CardTable({ data }) {
  /* 
    CodeWars: (currentTotal)(LastWeek)(Goal)(PercentOfGoalAchieved)
    CW currentTotal: (data.codewars.current.total)
    CW LastWeek: (data.codewars.current.lastweek)
    CW Goal: (data.goal.current.total)
    CW POGA: ( currentTotal/ goal)

    Certifications: (Resume)(Linkedin)(Github)(mockInterview)
    Cert Resume: (data.certifications.resume)
    Cert Linkedin: (data.certifications.linkedin)
    Cert github: (data.certifications.github)
    Cert mockInterview: (data.certifications.mockInterview)
    */
  //----------Variable Hell--------------//
  const cwCurrentTotal = data.codewars.current.total;
  const cwLastWeek = data.codewars.current.lastWeek;
  const cwGoal = data.codewars.goal.total;
  const cwPOGA = parseFloat(cwCurrentTotal / cwGoal).toFixed(2);
  //  console.log(cwPOGA, cwCurrentTotal, cwGoal);
  const cerResume = data.certifications.resume;
  const cerLinkedin = data.certifications.linkedin;
  const cerGithub = data.certifications.github;
  const cerMock = data.certifications.mockInterview;
  //console.log();

  const scAssign = data.cohort.scores.assignments;
  const scProjects = data.cohort.scores.projects;
  const scAssess = data.cohort.scores.assessments;

  //console.log(scAssign, scProjects, scAssess);

  //console.log(cerResume, cerLinkedin, cerGithub, cerMock);

  function handleEmoji(item) {
    return item ? "✅" : "❌";
  }

  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">CodeWars</th>
          <th scope="col">Scores</th>
          <th scope="col">Certifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Current Total: {cwCurrentTotal}</td>
          <td>Assignments: {scAssign * 100}%</td>
          <td>Resume: {handleEmoji(cerResume)}</td>
        </tr>
        <tr>
          <td>Last Week: {cwLastWeek}</td>
          <td>Projects: {scProjects * 100}%</td>
          <td>Linkedin: {handleEmoji(cerLinkedin)}</td>
        </tr>
        <tr>
          <td>Goal: {cwGoal}</td>
          <td>Assessments: {scAssess * 100}%</td>
          <td>Mock Interview: {handleEmoji(cerMock)}</td>
        </tr>
        <tr>
          <td colSpan={"2"}>Percent Of Goal Achieved: {cwPOGA * 100}%</td>
          <td>Github: {handleEmoji(cerGithub)}</td>
        </tr>
      </tbody>
    </table>
  );
}
