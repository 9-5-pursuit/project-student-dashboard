import data from "./data/data.json";
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let now = new Date(data[0]["dob"]);
// console.log(
//   months[now.getMonth()] + " " + now.getDate() + " " + now.getFullYear()
// );

// new Date().toLocaleDateString("en-us", {
//   year: "numeric",
//   month: "short",
//   day: "numeric",
// });

// console.log(new Date(data[0]["dob"]));

function App() {
  let arr = [];

  for (let i of data) {
    arr.push(i["cohort"][["cohortCode"]]);
  }

  let unique = [...new Set(arr)];
  console.log(unique);

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <aside className="my-4">
        <h3>Choose a Class by Start Date</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item fw-bold">All Students</li>

          <li className="list-group-item fw-bold ">Winter 2026</li>
          <li className="list-group-item fw-bold">Fall 2026</li>
          <li className="list-group-item fw-bold">Summer 2026</li>
          <li className="list-group-item fw-bold">Spring 2026</li>
          <li></li>
        </ul>
      </aside>

      <main className="my-4">
        <div className="main-header">
          <h2>All Students</h2>
          <p>
            Total Students: <span>{data.length}</span>
          </p>
        </div>

        <div className="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data[0]["profilePhoto"]}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {data[0]["names"]["preferredName"] +
                    " " +
                    data[0]["names"]["middleName"][0] +
                    "." +
                    " " +
                    data[0]["names"]["surname"]}
                </h5>
                <p className="card-email">{data[0]["username"]}</p>
                <p className="card-birthday">
                  <span>Birthday: </span>
                  {data[0]["dob"]}
                </p>
                <p className="show-more">
                  <small>
                    <a href="#">
                      <span>Show More...</span>
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
