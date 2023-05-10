import Header from "./Header";
import CohortList from "./CohortList";
import StudentList from "./StudentList";
import OneonOne from "./OneonOne";
import { useState } from "react";
function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <>
      <Header/>
      <div className="row">
        <div className="col-4">
          <CohortList setSelectedCohort={setSelectedCohort} />
        </div>
        <div className="col-8">
          <StudentList
            selectedCohort={selectedCohort}
            setSelectedCohort={setSelectedCohort}
          />
          <OneonOne />
        </div>
      </div>
    </>
  );
}

export default App;
