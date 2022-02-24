export const validateFields = ({
  teamName,
  teamLeadEmployeeID,
  teamMembersIds,
}) => {
  let regex = /^[\d]*(,?[\d]+){1,}$/;
  if (teamName === "") {
    alert("Please enter Team Name");
    return false;
  } else if (teamLeadEmployeeID === "") {
    alert("Please Enter Team Lead Employee ID");
    return false;
  } else if (teamMembersIds.length === 0 || !regex.test(teamMembersIds)) {
    alert(
      "For team members please enter comma (,) seperated numbers only eg 1 or 1,2"
    );
    return false;
  }
  return true;
};
export const validateWithDataBase = ({
  employees,
  teamMembersIds,
  teamName,
  teamLeadEmployeeID,
}) => {
  const allEmployees = employees.EMPLOYEES;
  const allTeams = employees.TEAMS;
  const allPresentTLIds = allTeams.map((e) => e.TEAM_LEADER_ID);
  let inputIDArrays = teamMembersIds.split(","); // team members input

  //for availability of team name
  const teamNameExists = allTeams.some((e) => e.NAME === teamName);
  const TLNotAvailable = allTeams.some(
    (e) => e.TEAM_LEADER_ID === teamLeadEmployeeID
  );

  // for availability of team member
  let activeTMsArray = allTeams.map((e) => e.TEAM_MEMBERS_ID).flat(Infinity);
  const TMNotAvailable = activeTMsArray.some((item) =>
    inputIDArrays.includes(item)
  );

  //To check if team member ID exists in the database
  let ArrayofAllEmployeeIDs = [];
  allEmployees.forEach((e) => {
    ArrayofAllEmployeeIDs.push(e.ID);
  });
  const TMExists = inputIDArrays.every((e) =>
    ArrayofAllEmployeeIDs.includes(e)
  );

  // To check if  Team Lead ID exists in the database
  const TeamLeadExists = ArrayofAllEmployeeIDs.includes(teamLeadEmployeeID);

  /*To check if team lead ID isn't a team members id */
  const teamLeadIsValid = activeTMsArray.includes(teamLeadEmployeeID);

  /*To check if entered employee Id isn't of a current TM ID */
  const TMNotValid = inputIDArrays.every((e) => allPresentTLIds.includes(e));

  /* To check if TM id entered and TL id entered are not the same */
  const violatedIDsEntered = inputIDArrays.includes(teamLeadEmployeeID);

  if (teamNameExists) {
    alert("Team name already exists");
    return false;
  } else if (TeamLeadExists === false) {
    alert("Team Lead ID Doesn't exist in the database");
    return false;
  } else if (TLNotAvailable) {
    alert("Team Leader is already within a Team");
    return false;
  } else if (teamLeadIsValid) {
    alert(
      `Team lead ID belongs to active team members ID please enter a valid ID`
    );
    return false;
  } else if (TMExists === false) {
    alert("Team Member ID Doesn't exist in the database");
    return false;
  } else if (TMNotAvailable) {
    alert("Team Member is already within a Team");
    return false;
  } else if (TMNotValid) {
    alert("You have entered employee ID of a current TL in an active team");
    return false;
  } else if (violatedIDsEntered) {
    alert("Please enter distinct employee ID for team lead and team members");
    return false;
  }
  return true;
};
