import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark justify-content-start">
        <Link to="/" className="navbar-brand mx-lg-2">
          CompanyX
        </Link>

        <Link to="/employees" className="navbar-brand mx-lg-5 ">
          Employees
        </Link>
        <Link to="/departments" className="navbar-brand ">
          Departments
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
