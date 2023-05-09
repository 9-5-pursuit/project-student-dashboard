import Months from "./Components/Months";
import AllStudents from "./Components/AllStudents";
import { useState } from "react";
import sData from './data/data.json'
function App() {

  const [data, setData] = useState(sData)
  const [cohort, setCohort] = useState('All Students')

  const setCards = (args) => {
    setData(args)
  }

  const setC = (args) => {
    setCohort(args)
  }

  return (
    <>
      <div className="bg-success py-4">
        <div className="container">
          <h1 className="text-center text-white">Student Dashboard</h1>
        </div>
      </div>
      <div className="container py-2" style={{ maxWidth: '90%' }}>
        <div className="row">
          <div className="col-sm-3 bg-light px-4"><Months setCards={setCards} setC={setC} cohort={cohort} /></div>
          <div className="col-sm-9 px-4">
            <div>
              <h1>{cohort.replace(/(\D)(\d)/, '$1 $2')}</h1>
              <p>Total Students: <span className="text-success">{data.length}</span></p>
            </div>
            <AllStudents data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
