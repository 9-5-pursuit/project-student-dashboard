import Header from "./Header";
import CohortList from "./CohortList";
import StudentList from "./StudentList";
import OneonOne from "./OneonOne";
function App() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-4">
          <CohortList />
        </div>
        <div className="col-8">
          <StudentList />
          <OneonOne />
        </div>
      </div>
    </>
  );
}

export default App;
