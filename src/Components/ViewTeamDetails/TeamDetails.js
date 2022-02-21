import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";
import TeamDetailsCard from "./TeamDetailsCard";

const TeamDetails = () => {
  const [teamMemberDetails, setTeamMemberDetails] = useState([]);
  const [teamLeadDetails, setTeamLeadDetails] = useState([]);

  /* getting the department ID from params.*/
  const params = useParams();
  //calling the useEmployee context.
  const employees = useEmployee();

  /*function to get Team Id's under the selected Department.*/
  const fetchTeamMembers = useCallback(() => {
    const allTeams = employees.TEAMS;
    const allEmployees = employees.EMPLOYEES;
    const teamId = params.teamId;

    const targetTeam = allTeams.find((e) => e.ID === teamId);
    const targetMembers = allEmployees.filter((e) =>
      targetTeam.TEAM_MEMBERS_ID.includes(e.ID)
    );
    setTeamMemberDetails(targetMembers);
  }, [employees.EMPLOYEES, employees.TEAMS, params.teamId]);

  /*function to get Team Id's under the selected Department.*/
  const fetchTeamLead = useCallback(() => {
    // const allEmployee = employees.DEPARTMENTS;
    // const deptInfo = allEmployee.filter((e) => e.ID === departmentID);
    // const teamsUnderDepartment = deptInfo[0].TEAMS_IDS;
    // setTeamLeadDetails(teamsUnderDepartment);
  }, []);
  console.log(employees);
  useEffect(() => {
    fetchTeamMembers();
    fetchTeamLead();
  }, [fetchTeamMembers, fetchTeamLead]);

  return (
    <>
      <div>
        {teamMemberDetails.length > 0 &&
          teamMemberDetails.map((elm, idx) => {
            return (
              <React.Fragment key={idx}>
                <TeamDetailsCard
                  memberName={elm.NAME}
                  memberPhone={elm.PHONE}
                  memberEmail={elm.EMAIL}
                  memberID={elm.ID}
                />
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default TeamDetails;
