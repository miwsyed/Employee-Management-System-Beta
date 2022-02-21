import React from "react";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ teamName, totalMembers, teamId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/team-details/${teamId}`);
  };

  return (
    <div onClick={handleClick}>
      <div className="d-flex justify-content-center">
        <div
          key={teamId}
          className="card w-25 mt-5"
          style={{ width: "1rem", cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title">Team Name : {teamName}</h5>
          </div>
          <div className="card-footer">
            <div className="card-text">
              <p>Total Members : {totalMembers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
