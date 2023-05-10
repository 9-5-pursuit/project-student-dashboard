function StudentInfo({ item }) {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }
  const {
    codewars: {
      current: { total: currentTotal, lastWeek: currentLastWeek },
      goal: { total: goalTotal, lastWeek: goalLastWeek },
    },
    certification: { resume, linkedin, github, mockInterview },
    cohorts: { scores },
  } = item;

  const assignmentsPercentage = Math.round(scores.assignment * 100);
  const projectsPercentage = Math.round(scores.projects * 100);
  const assesmentPercentage = Math.round(scores.assessments * 100);

  const totalPercentage = Math.round((currentTotal / goalTotal) * 100);
}
