import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { EmployeeProvider } from "./Components/Context/EmployeeProvider";
const ViewTMsUnderTL = React.lazy(() =>
  import("./Components/View Employee/ViewTMsUnderTL")
);
const AddTeamCard = React.lazy(() =>
  import("./Components/ViewTeams/AddTeamCard")
);
const TeamDetails = React.lazy(() =>
  import("./Components/ViewTeamDetails/TeamDetails")
);
const ViewTeams = React.lazy(() => import("./Components/ViewTeams/ViewTeams"));

const ViewAllEmployees = React.lazy(() =>
  import("./Components/View Employee/ViewAllEmployees")
);
const Departments = React.lazy(() =>
  import("./Components/Departments/Departments")
);
const NotFound = React.lazy(() => import("./Components/ERROR404/NotFound"));
const Home = React.lazy(() => import("./Components/Home"));
const EditEmployee = React.lazy(() =>
  import("./Components/EditEmployee/EditEmployee")
);
const AddEmployee = React.lazy(() =>
  import("./Components/AddEmployee/AddEmployee")
);
// const ViewEmployee = React.lazy(() =>
//   import("./Components/View Employee/ViewEmployee")
// );

function App() {
  return (
    <EmployeeProvider>
      <Suspense
        fallback={
          <div className="">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        }
      >
        {" "}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-member/:teamId" element={<AddEmployee />} />
            <Route path="/employees" element={<ViewAllEmployees />} />
            <Route path="/edit/:employeeID" element={<EditEmployee />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/teams/:deptId" element={<ViewTeams />} />
            <Route
              path="/departments/add-team/:deptID"
              element={<AddTeamCard />}
            />
            <Route
              path="/departments/employees/under-tl/:tlID"
              element={<ViewTMsUnderTL />}
            />

            <Route
              path="/departments/team-details/:teamId"
              element={<TeamDetails />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </EmployeeProvider>
  );
}

export default App;
