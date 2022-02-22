import React from "react";
import { useNavigate } from "react-router-dom";

const DepartmentCard = ({ deptName, deptDescription, HOD, deptId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/teams/${deptId}`);
  };

  return (
    <div className="w-100 row " onClick={handleClick}>
      <div className="d-flex justify-content-center flex-wrap">
        <div
          key={deptId}
          className="mx-5 card mt-5"
          style={{ width: "20rem", cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title">{deptName}</h5>
            <p className="card-text">{deptDescription}</p>
          </div>
          <div className="card-footer">
            <p>
              H.O.D - <b>{HOD}</b>
            </p>
          </div>
        </div>
      </div>
      <style>{`
       .card{display:inline-block};
      `}</style>
    </div>
  );
};

export default DepartmentCard;
