import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeDispatch } from "../Context/EmployeeProvider";

const TeamCard = ({ teamName, totalMembers, teamId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/departments/team-details/${teamId}`);
  };

  const dispatch = useEmployeeDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELETE_TEAM", teamID: teamId });
  };

  return (
    <div className="w-100 row ">
      <div className="d-flex  justify-content-center flex-wrap align-items-stretch">
        <div
          key={teamId}
          className="mx-2 card mt-5"
          style={{ width: "20rem", cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title">Team Name : {teamName}</h5>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <div className="card-text">
              {/* +1 because we add teamLead later */}
              <p>Total Members :{totalMembers + 1}</p>
            </div>
            <div className="">
              <button
                className="btn btn-outline-dark btn-sm mr-2"
                onClick={handleClick}
              >
                View
              </button>
              <div className="custom-del-btn">
                <button
                  onClick={handleDelete}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <style>{`
        .custom-del-btn{
          display : inline-flex;
          margin-inline :5px !important;
        }
        .card {
          min-height : 18vh !important;
        }
        
        `}</style>
    </div>
  );
};

export default TeamCard;
