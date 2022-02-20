import React from "react";
import { Link } from "react-router-dom";
import { useIsAdminContext } from "../Context/EmployeeProvider";

const Navbar = () => {
  const isAdmin = useIsAdminContext();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark justify-content-start">
        <Link to="/" className="navbar-brand mx-2">
          CompanyX
        </Link>
        {isAdmin && (
          <>
            <Link to="/employees" className="navbar-brand mx-5">
              Employees
            </Link>
            <Link to="/departments" className="navbar-brand ">
              Departments
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
