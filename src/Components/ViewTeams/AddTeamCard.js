import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployee, useEmployeeDispatch } from "../Context/EmployeeProvider";
/// PLANS FOR LATER IMPLEMENT DEBOUNCED VALIDATION
const AddTeamCard = () => {
  const [teamName, setTeamName] = useState("");
  const [teamLeadEmployeeID, setTeamLeadEmployeeID] = useState("");
  const [teamMembersIds, setTeamMembersIds] = useState("");
  const navigate = useNavigate();

  const params = useParams();
  const departmentID = params.deptID;
  const dispatchEmployee = useEmployeeDispatch();
  const employees = useEmployee();

  //validation function later move it to validations folder.
  const validateFields = () => {
    let regex = /^[\d]*(,?[\d]+){1,}$/;
    if (teamName === "") {
      alert("Please enter Team Name");
      return false;
    } else if (teamLeadEmployeeID === "") {
      alert("Please Enter Team Lead Employee ID");
      return false;
    } else if (!regex.test(teamMembersIds)) {
      alert(
        "For team members please enter comma (,) seperated numbers only eg 1 or 1,2"
      );
      return false;
    }
    return true;
  };
  const validateWithDataBase = () => {
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
    const employeeIDExists = inputIDArrays.every((e) =>
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
    } else if (employeeIDExists === false) {
      alert("Employee ID Doesn't exist in the database");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // hovering over await might say has no effect but if removed on browser we get this error [Violation] 'submit' handler took 1013ms
    if ((await validateFields()) === true) {
      if ((await validateWithDataBase()) === true) {
        const newID =
          Number(employees.TEAMS.slice(employees.TEAMS.length - 1)[0].ID) + 1;
        const addTeam = {
          NAME: teamName,
          ID: String(newID),
          TEAM_LEADER_ID: teamLeadEmployeeID,
          TEAM_MEMBERS_ID: teamMembersIds.split(","),
        };

        // //make the dispatch item
        const dataTeam = { ...addTeam };

        const dataNewTeamAndDepartment = {
          DEPARTMENT_ID: departmentID,
          TEAM_ID: String(newID),
        };
        //send dispatch
        dispatchEmployee({ type: "ADD_TEAM", dataTeam });
        dispatchEmployee({
          type: "ADD_TEAM_UNDER_DEPARTMENT",
          dataNewTeamAndDepartment,
        });

        alert(
          "Team successfully created. You are now being redircted to the teams page."
        );
        setTimeout(() => {
          navigate(`/admin/team-details/${newID}`);
        }, 500);
        // navigate back to team details page
      }
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-5 mt-5 mx-auto shadow ">
          <p
            style={{ fontSize: "3rem" }}
            className="text-center text-dark py-3 display-2"
          >
            Add Team
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <input
                className="form-control"
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="number"
                placeholder="Team Lead Employee ID "
                value={teamLeadEmployeeID}
                onChange={(e) => setTeamLeadEmployeeID(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Team Members Employee Ids seperated by (,)"
                value={teamMembersIds}
                onChange={(e) => setTeamMembersIds(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeamCard;
