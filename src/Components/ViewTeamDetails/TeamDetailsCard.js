import React from "react";
import { useNavigate } from "react-router-dom";

const TeamDetailsCard = ({
  memberName,
  memberPhone,
  memberEmail,
  memberID,
}) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div
          key={memberID}
          className="card w-25 mt-5"
          style={{ width: "1rem", cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title">Team Member : {memberName}</h5>
            <div className="card-text">Phone : {memberPhone} </div>
            <div className="card-text">Email : {memberEmail}</div>
            <div className="card-text">Employee ID : {memberID}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsCard;
