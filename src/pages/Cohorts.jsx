import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useCollection } from "../hooks/useCollection";
import { timestamp } from "../firebase/config";
import { useFirestore } from "../hooks/useFirestore";

import "./Cohorts.css";

const cohorts = [
  { value: "all", label: "All" },
  { value: "9.1/day", label: "9.1/day" },
  { value: "9.2/n-w", label: "9.2/n-w" },
  { value: "9.3/day", label: "9.3/day" },
  { value: "9.4/n-w", label: "9.4/n-w" },
  { value: "9.5/day", label: "9.5/day" },
  { value: "9.6/n-w", label: "9.6/n-w" },
  { value: "9.7/days", label: "9.7/days" },
  { value: "9.8/n-w", label: "9.8/n-w" },
];

const Cohorts = () => {
  const navigate = useNavigate();
  const { documents } = useCollection("users");

  // console.log(documents); array of objects
  const { addDocument, response } = useFirestore("cohorts"); // response is the initial state
  const [users, setUsers] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [cohort, setCohort] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  useEffect(() => {
    if (response && response.success) {
      navigate("/dashboard");
    }
  }, [response, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!cohort) {
      setFormError("Please select a cohort.");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign a user.");
      return;
    }

    const assignedUsersList = assignedUsers.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id,
      };
    });

    const cohortClass = {
      cohort: cohort.value,
      startDate: timestamp.fromDate(new Date(startDate)),
      comments: [],
      assignedUsersList,
    };
    // console.log("cohortClass:", cohortClass);
    // console.log("assignedUsersList:", assignedUsersList);

    // Check if the user has permissions to create the document
    await addDocument(cohortClass);
  };

  return (
    <div className="cohort">
      <form onSubmit={handleSubmit}>
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
          <h2>Cohort:</h2>
          <Select onChange={(option) => setCohort(option)} options={cohorts} />
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

export default Cohorts;
