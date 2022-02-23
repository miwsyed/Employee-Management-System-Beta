import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "./Context/EmployeeProvider";
const Home = () => {
  let navigate = useNavigate();
  const handleAdminButton = () => {
    //some login options later maybe
    navigate(`/admin`);
  };

  const handleVisitorButton = () => {
    //set Admin context APi to false

    navigate(`/visitor`);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-block">
        <h2 className="text-center ">
          <button className="btn btn-outline-dark" onClick={handleAdminButton}>
            I am an Admin
          </button>
        </h2>

        <h2 className="text-center ">
          <button
            className="btn btn-outline-dark"
            onClick={handleVisitorButton}
          >
            I am a Visitor
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Home;
