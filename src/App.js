import { useState } from "react";
import data from "./data/data.json";
import CohortList from "./components/CohortList";
import Cards from "./components/Cards";

function App() {
  const [cardCohort, setCardCohort] = useState("All Students");
  const [title, setTitle] = useState("All Students");

  let cohortList = function () {
    let newObj = [];

    for (let i = 0; i < data.length; i++) {
      newObj[i] = {
        cohortName:
          data[i]["cohort"]["cohortCode"].match(/[a-zA-Z]+/g) +
          " " +
          data[i]["cohort"]["cohortCode"].match(/\d+/g),
        cohortCode: data[i]["cohort"]["cohortCode"],
      };
    }

    const result = newObj.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (e) =>
            e.cohortName === item.cohortName && e.cohortCode === item.cohortCode
        )
    );
    const sortedArr = result.sort((a, b) => {
      if (a.cohortName.match(/\d+/g) < b.cohortName.match(/\d+/g)) {
        return 1;
      }
      if (a.cohortName.match(/\d+/g) > b.cohortName.match(/\d+/g)) {
        return -1;
      }
      return 0;
    });

    return sortedArr;
  };

  function showByCohort() {
    let someArray = [];
    for (let i of data) {
      if (cardCohort === "All Students") {
        return data;
      }
      if (i["cohort"]["cohortCode"] === cardCohort) {
        someArray.push(i);
      }
    }

    return someArray;
  }

  function toggleShow(e) {
    if (e.target.innerHTML === "Show More...") {
      e.target.innerHTML = "Show Less...";
    } else {
      e.target.innerHTML = "Show More...";
    }
  }

  function handleTitle(e) {
    setTitle(e.target.innerHTML);
    setCardCohort(e.target.id);
  }

  function handleBirthday(date) {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let birthday = new Date(date);
    let formattedBirthday = birthday.toLocaleDateString("en-US", options);
    return formattedBirthday;
  }

  function handleGoalColor(a, b) {
    let goal = ((a / b) * 100).toFixed();
    if (goal >= 100) {
      return "green";
    } else if (goal >= 50 && goal < 100) {
      return "yellow";
    } else {
      return "red";
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <div className="m-5 my-5">
        <div className="row">
          <div className="col">
            <aside className="my-4 ">
              <CohortList
                setCardCohort={setCardCohort}
                cohortList={cohortList}
                handleTitle={handleTitle}
                setTitle={setTitle}
              />
            </aside>
          </div>
          <div className="col-md-8 col-sm-12">
            <main className="my-4 ">
              <Cards
                title={title}
                showByCohort={showByCohort}
                handleBirthday={handleBirthday}
                cardCohort={cardCohort}
                toggleShow={toggleShow}
                handleGoalColor={handleGoalColor}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
