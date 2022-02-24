import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployee, useEmployeeDispatch } from "../Context/EmployeeProvider";
import { validateFields, validateWithDataBase } from "./Validation";
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

  //calling field validation function
  const callValidateFields = () =>
    validateFields({
      teamName,
      teamLeadEmployeeID,
      teamMembersIds,
    });

  //calling validation with database function
  const callvalidateWithDataBase = () =>
    validateWithDataBase({
      employees,
      teamMembersIds,
      teamName,
      teamLeadEmployeeID,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // hovering over await might say has no effect but if removed on browser we get this error [Violation] 'submit' handler took 1013ms
    if ((await callValidateFields()) === true) {
      if ((await callvalidateWithDataBase()) === true) {
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

        //will use iziToast later
        alert(
          "Team successfully created. You are now being redircted to your new teams page."
        );
        setTimeout(() => {
          navigate(`/departments/team-details/${newID}`);
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
