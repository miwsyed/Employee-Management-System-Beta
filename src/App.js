import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { EmployeeProvider } from "./Components/Context/EmployeeProvider";
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
          <>
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </>
        }
      >
        {" "}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/view" element={<ViewEmployee />} />
            <Route path="/edit/:id" element={<EditEmployee />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/visitor" element={<Visitor />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </EmployeeProvider>
  );
}

export default App;
