import React from "react";

function Semesters({ toggleAll, semesters, getSemester }) {
    return (
        <>
            <h3>Choose a Class by Start Date</h3>
            <p
                onClick={toggleAll}
                className="border-bottom border-1 border-success link"
            >
                All Students
            </p>
            {semesters.map((e) => {
                return getSemester(e);
            })}
        </>
    );
}

export default Semesters;
