import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { EmployeeProvider } from "./Components/Context/EmployeeProvider";
const TeamDetails = React.lazy(() =>
  import("./Components/ViewTeamDetails/TeamDetails")
);
const ViewTeams = React.lazy(() => import("./Components/ViewTeams/ViewTeams"));
const Departments = React.lazy(() =>
  import("./Components/Departments/Departments")
);
const ViewAllEmployees = React.lazy(() =>
  import("./Components/View Employee/ViewAllEmployees")
);
const Visitor = React.lazy(() => import("./Components/Visitor/Visitor"));
const AdminHome = React.lazy(() => import("./Components/Admin/AdminHome"));
const NotFound = React.lazy(() => import("./Components/ERROR404/NotFound"));
const Home = React.lazy(() => import("./Components/Home"));
const EditEmployee = React.lazy(() =>
  import("./Components/EditEmployee/EditEmployee")
);
const AddEmployee = React.lazy(() =>
  import("./Components/AddEmployee/AddEmployee")
);
const ViewEmployee = React.lazy(() =>
  import("./Components/View Employee/ViewEmployee")
);

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
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/employees" element={<ViewAllEmployees />} />
            <Route path="/edit/:employeeID" element={<EditEmployee />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/visitor" element={<Visitor />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/admin/teams/:deptId" element={<ViewTeams />} />
            <Route
              path="/admin/team-details/:teamId"
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
