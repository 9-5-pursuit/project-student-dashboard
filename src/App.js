import Months from "./Components/Months";
import AllStudents from "./Components/AllStudents";
function App() {
  return (
    <div>
  <div class="bg-success py-4">
    <div class="container">
      <h1 class="text-center text-white">Student Dashboard</h1>
    </div>
  </div>
      
      <div className="container">
      <div className="row">
        <div className="col-sm-3 bg-light px-2"><Months/></div>
        <div className="col-sm-9 bg-info px-2"><AllStudents/></div>
      </div>
    </div>
    </div>
  );
}

export default App;
