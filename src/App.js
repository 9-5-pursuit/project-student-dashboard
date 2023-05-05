import Months from "./Components/Months";
import AllStudents from "./Components/AllStudents";
import { useState } from "react";
import sData from './data/data.json'
function App() {

  const [data, setData] = useState(sData)

  const setCards = (args) => {
    setData(args)
  }
  return (
    <div>
  <div className="bg-success py-4">
    <div className="container">
      <h1 className="text-center text-white">Student Dashboard</h1>
    </div>
  </div>
      
      <div className="container" style={{maxWidth: '90%'}}>
      <div className="row">
        <div className="col-sm-3 bg-light px-4"><Months setCards={setCards}/></div>
        <div className="col-sm-9 px-4"><AllStudents data={data}/></div>
        
      </div>
    </div>
    </div>
  );
}

export default App;
