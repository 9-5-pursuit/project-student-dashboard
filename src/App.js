import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from "./components/OnlineUsers";
import {
  Dashboard,
  Login,
  SignUp,
  CreateCohorts,
  GetCohorts,
  Cohort,
} from "./pages";
import { Navbar, Sidebar } from "./components";
import "./App.css";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="app">
    {authIsReady && (
      <Router>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route 
            path="/login" 
            element={user ? <Navigate to="/" /> : <Login />} 
            />
            <Route 
            path="/signup" 
            element={user ? <Navigate to="/" /> : <SignUp />} 
            />
            <Route path="/" element={<Dashboard />} />
            <Route 
            path="/add-cohorts" 
            element={user ? <CreateCohorts /> : <Navigate to="/login" />} 
            />
            <Route path="/get-cohorts" element={<GetCohorts />} />
            <Route path="/cohorts/:id" element={<Cohort />} />
            
          </Routes>
        </div>
        {user && <OnlineUsers />}
      </Router>
    )}
    </div>
  );
}

export default App;
