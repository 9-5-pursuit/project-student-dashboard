import Header from './Components/Header'
import CohortList from './Components/CohortList'
import StudentList from './Components/StudentList'

import { useState } from 'react'

function App() {
  return (
    <div>
      <Header />
      <CohortList />
      <StudentList />
    </div>
  );
}

export default App;
