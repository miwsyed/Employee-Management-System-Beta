import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";
import TeamCard from "./TeamCard";

const ViewTeams = () => {
  /*hook to store team Id's under Selected Department.*/
  const [teamIdsUnderDept, setTeamIdsUnderDept] = useState([]);

  /*hook to store all teams under Selected Department.*/
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();

  /* getting the department ID from params.*/
  const params = useParams();
  /*calling the context API.*/
  const employees = useEmployee();
  let departmentID = params.deptId;

  /*writing readable functions for better understanding can be changed later after review.*/
  /*function to get Team Id's under the selected Department.*/
  const fetchTeamIdsUnderDepartMent = useCallback(() => {
    const allEmployee = employees.DEPARTMENTS;
    const deptInfo = allEmployee.filter((e) => e.ID === departmentID);
    const teamsUnderDepartment = deptInfo[0].TEAMS_IDS;
    setTeamIdsUnderDept(teamsUnderDepartment);
  }, [employees.DEPARTMENTS, departmentID]);

  /*function to get  teams under the team Id's.*/
  const fetchTeams = useCallback(() => {
    const allTeams = employees.TEAMS;
    const targetTeams = allTeams.filter((e) => teamIdsUnderDept.includes(e.ID));
    setTeams(targetTeams);
  }, [employees.TEAMS, teamIdsUnderDept]);

  useEffect(() => {
    fetchTeams();
    fetchTeamIdsUnderDepartMent();
  }, [fetchTeams, fetchTeamIdsUnderDepartMent]);

  const handleAddTeam = () => {
    navigate(`/departments/add-team/${departmentID}`);
  };

  return (
    <>
      <div className="container mx-auto mt-5 ">
        <div className=" ">
          <div>
            <button
              onClick={handleAddTeam}
              className="btn btn-outline-dark btn-m d-flex"
            >
              Add Team
            </button>
          </div>
          <div>
            {teams.length > 0 &&
              teams.map((elm, idx) => {
                return (
                  <div className="d-inline-flex" key={idx}>
                    <TeamCard
                      teamName={elm.NAME}
                      totalMembers={elm.TEAM_MEMBERS_ID.length}
                      teamId={elm.ID}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTeams;
