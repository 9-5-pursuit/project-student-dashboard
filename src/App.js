import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  Dashboard,
  Create,
  Login,
  SignUp,
  Cohorts,
  GetCohorts,
  Cohort,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element=<Dashboard /> />
        <Route path="/add-cohorts" element=<Cohorts /> />
        <Route path="/cohorts" element=<GetCohorts /> />
        <Route path="/cohorts/:id" element=<Cohort /> />
        <Route path="/create" element={<Create />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
