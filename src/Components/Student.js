import React from "react";
import Students from "./Students";

function Student({ students }) {
    return (
        <>
            <h3>All students</h3>
            <p>
                Total Students:{" "}
                <span className="text-success">{students.length}</span>
            </p>
            {students.map((element) => {
                return <Students student={element} key={element.id} />;
            })}
        </>
    );
}

export default Student;
