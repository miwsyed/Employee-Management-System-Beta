import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";
import TeamCard from "./TeamCard";

const ViewTeams = () => {
  /*hook to store team Id's under Selected Department.*/
  const [teamIdsUnderDept, setTeamIdsUnderDept] = useState([]);

  /*hook to store all teams under Selected Department.*/
  const [teams, setTeams] = useState([]);

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
  teams.length > 0 && console.log("Team s: ", teams);

  return (
    <>
      <div>
        {teams.length > 0 &&
          teams.map((elm, idx) => {
            return (
              <React.Fragment key={idx}>
                <TeamCard
                  teamName={elm.NAME}
                  totalMembers={elm.TEAM_MEMBERS_ID.length}
                  teamId={elm.ID}
                />
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default ViewTeams;
