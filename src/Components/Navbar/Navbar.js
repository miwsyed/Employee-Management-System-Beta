import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mx-2">
          CompanyX
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
