import Header from "./Components/Header";
import DateTable from "./Components/DateTable";
import studentData from "./data/data.json";
import StudentCards from "./Components/StudentCards";
import { useState } from "react";
//import {v1 as uuidv1} from 'uuid';
function App() {
  const [selectDate, setSelectDate] = useState("All Students");
  return (
    <div>
      <Header />
      <div className="container row">
        <DateTable setSelectDate={setSelectDate} />
        <StudentCards studentData={studentData} selectDate={selectDate} />
      </div>
    </div>
  );
}

export default App;
