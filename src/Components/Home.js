import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  const handleAdminButton = () => {
    //some login options later maybe
    navigate(`/admin`);
  };

  const handleVisitorButton = () => {
    //some login options later maybe
    navigate(`/visitor`);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-block">
        <h2 className="text-center ">
          <button onClick={handleAdminButton}>I am an Admin</button>
        </h2>

        <h2 className="text-center ">
          <button onClick={handleVisitorButton}>I am a Visitor</button>
        </h2>
      </div>
    </div>
  );
};

export default Home;
