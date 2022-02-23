import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";
import TeamDetailsCard from "./TeamDetailsCard";

const TeamDetails = () => {
  const [teamMemberDetails, setTeamMemberDetails] = useState([]);
  const [teamLeadDetails, setTeamLeadDetails] = useState({});

  /* getting the department ID from params.*/
  const params = useParams();
  //calling the useEmployee context.
  const employees = useEmployee();

  /*function to get Team Id's under the selected Department.*/
  const fetchTeamMembers = useCallback(() => {
    const allTeams = employees.TEAMS;
    const allEmployees = employees.EMPLOYEES;
    const teamId = params.teamId;
    // fetch all employees
    const targetTeam = allTeams.find((e) => e.ID === teamId);
    const targetMembers = allEmployees.filter((e) =>
      targetTeam.TEAM_MEMBERS_ID.includes(e.ID)
    );
    //fetch team lead
    const targetTeamlead = allEmployees.filter(
      (e) => e.ID === targetTeam.TEAM_LEADER_ID
    );
    const addTminfo = Object.assign({}, ...targetTeamlead);
    addTminfo["IS_TEAM_LEAD"] = true;

    targetMembers.push(addTminfo);

    setTeamMemberDetails(targetMembers);

    setTimeout(() => {}, 100);
  }, [employees.EMPLOYEES, employees.TEAMS, params.teamId]);

  useEffect(() => {
    fetchTeamMembers();
  }, [fetchTeamMembers]);

  return (
    <>
      <React.Fragment>
        <TeamDetailsCard teamMemberDetails={teamMemberDetails} />
      </React.Fragment>
    </>
  );
};

export default TeamDetails;
