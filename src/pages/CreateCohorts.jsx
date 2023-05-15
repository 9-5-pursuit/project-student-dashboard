// create cohorts
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Select from "react-select";
import { useCollection } from "../hooks/useCollection";
import { timestamp } from "../firebase/config";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext"

import "./CreateCohorts.css";

const cohorts = [
  { value: "all", label: "All" },
  { value: "winter2026", label: "Winter 2026" },
  { value: "fall2026", label: "Fall 2026" },
  { value: "spring2026", label: "Spring 2026" },
  { value: "summer2026", label: "Summer 2026" },
  { value: "winter2025", label: "Winter 2025" },
  { value: "fall2025", label: "Fall 2025" },
  { value: "spring2025", label: "Spring 2025" },
  { value: "summer2025", label: "Summer 2025" },
];

const CreateCohorts = () => {
  const { documents } = useCollection("users");
  // console.log(documents); array of objects

  const { user } = useAuthContext();

  const { addDocument, response } = useFirestore("cohorts"); // response is the initial state

  const navigate = useNavigate();
  
  const [users, setUsers] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [cohort, setCohort] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: { ...user, id: user.id }, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(startDate, cohort.value, assignedUsers)
    
    setFormError(null);
    
    // perform checks on cohort Select && assignedUsers Select
    if (!cohort) {
      setFormError("Please select a cohort.");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign a user.");
      return;
    }

    const assignedUsersList = assignedUsers.map((el) => {
      return {
        displayName: el.value.displayName,
        photoURL: el.value.photoURL,
        email: el.value.email,
        id: el.value.id,
      };
    });

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      id: user.uid,
    };

    const cohortClass = {
      cohort: cohort.value,
      startDate: timestamp.fromDate(new Date(startDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    // Check if the user has permissions to create the document
    await addDocument(cohortClass);
    if(!response.error) {
      navigate('/')
    }
    console.log(cohortClass)
  };

  return (
    <div className="cohort">
      <form onSubmit={handleSubmit}>
        <label>
          <h2>Cohort:</h2>
          <Select onChange={(option) => setCohort(option)} options={cohorts} />
        </label>
        <label>
          <h2>Start date:</h2>
          <input
            required
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
        </label>
        <label>
          <h2>Assign to:</h2>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti //allows multiple selections
          />
        </label>
        <button className="btn-cohort">Add Cohort</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateCohorts;
