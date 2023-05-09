import { useState } from "react";
import studentsData from "./data/data.json";
import Student from "./Components/Student";
import Header from "./Components/Header";
import Semesters from "./Components/Semesters";
function App() {
    const [students, setStudents] = useState(studentsData);

    let studentState = true;
    function toggleStudents(type) {
        studentState = false;
        setStudents(
            studentsData.filter((e) => {
                return e.cohort.cohortCode.toLowerCase() === type;
            })
        );
    }
    function toggleAll() {
        setStudents(studentsData);
    }
    const years = [];
    const seasons = ["winter", "fall", "summer", "spring"];
    const semesters = [];
    studentsData.forEach((element) => {
        let code = element.cohort.cohortCode.toLowerCase();
        seasons.forEach((element) => {
            code = code.replace(element, "");
        });
        if (!years.includes(code)) {
            years.push(code);
        }
    });

    years.sort(function (a, b) {
        return b - a;
    });
    years.forEach((e) => {
        seasons.forEach((s) => {
            const firstLetter = s.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = s.slice(1);
            const capitalizedWord = firstLetterCap + remainingLetters;
            semesters.push({ [s + e]: capitalizedWord + " " + e });
        });
    });
    function getSemester(semester) {
        for (let key in semester) {
            return (
                <p
                    key={key}
                    className="border-bottom border-1 border-success link"
                    onClick={() => {
                        toggleStudents(key);
                    }}
                >
                    {semester[key]}
                </p>
            );
        }
    }
    return (
        <>
            <Header />
            <div className="container fw-bold mt-5 container-95">
                <div className="row">
                    <div className="col-4">
                        <Semesters
                            toggleAll={toggleAll}
                            semesters={semesters}
                            getSemester={getSemester}
                        />
                    </div>
                    <div className="col col-7">
                        <Student students={students} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
