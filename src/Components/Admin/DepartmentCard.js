import React from "react";
import { useNavigate } from "react-router-dom";

const DepartmentCard = ({ deptName, deptDescription, HOD, deptId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/teams/${deptId}`);
  };

  return (
    <div onClick={handleClick}>
      <div className="d-flex justify-content-center">
        <div
          key={deptId}
          className="card w-25 mt-5"
          style={{ width: "1rem", cursor: "pointer" }}
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
    </div>
  );
};

export default DepartmentCard;
