export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEAM_UNDER_DEPARTMENT": {
      const newState = JSON.parse(JSON.stringify(state));
      let newTeamID = action.dataNewTeamAndDepartment.TEAM_ID;
      let departmentID = action.dataNewTeamAndDepartment.DEPARTMENT_ID;
      let getDept = newState.DEPARTMENTS.find((e) => e.ID === departmentID);
      getDept.TEAMS_IDS.push(newTeamID);

      return newState;
    }
    case "ADD_NEW_EMPLOYEE": {
      //adding employee
      const newState = JSON.parse(JSON.stringify(state));

      const employees = newState.EMPLOYEES;
      employees.push(action.data);
      newState.EMPLOYEES = [...employees];

      return newState;
    }

    case "ADD_EMPLOYEE": {
      //adding employee
      const newState = JSON.parse(JSON.stringify(state));

      const employees = newState.EMPLOYEES;
      employees.push(action.data);
      newState.EMPLOYEES = [...employees];
      // state = JSON.parse(JSON.stringify(state));
      //adding employee to team
      newState.TEAMS.filter(
        (e) => e.ID === action.data.TEAMS_ID
      )[0].TEAM_MEMBERS_ID.push(action.data.ID);

      return newState;
    }

    case "UPDATE_EMPLOYEE": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.EMPLOYEES.filter((e) => e.ID === action.data.ID)[0].NAME =
        action.data.NAME;
      newState.EMPLOYEES.filter((e) => e.ID === action.data.ID)[0].EMAIL =
        action.data.EMAIL;
      newState.EMPLOYEES.filter((e) => e.ID === action.data.ID)[0].PHONE =
        action.data.PHONE;
      return newState;
    }

    case "DELETE_EMPLOYEE": {
      let newState = JSON.parse(JSON.stringify(state));
      //remove employee it's current team if they are present
      let isPresentInTeam = newState.TEAMS.some((e) =>
        e.TEAM_MEMBERS_ID.some((r) => r === String(action.id))
      );
      let currentTeam;
      if (isPresentInTeam) {
        currentTeam = newState.TEAMS.find((e) =>
          e.TEAM_MEMBERS_ID.some((r) => r.includes(String(action.id)))
        );
        currentTeam.TEAM_MEMBERS_ID.splice(
          currentTeam.TEAM_MEMBERS_ID.indexOf(String(action.id)),
          1
        );
      }

      // delete employee
      let remainingEmployees = newState.EMPLOYEES.filter(
        (e) => e.ID !== action.id
      );
      newState.EMPLOYEES = [...remainingEmployees];

      return newState;
    }

    case "ADD_TEAM": {
      let newState = JSON.parse(JSON.stringify(state));
      newState.TEAMS.push(action.dataTeam);
      return newState;
    }

    case "DELETE_TEAM": {
      let newState = JSON.parse(JSON.stringify(state));
      newState = newState.TEAMS.filter((e) => e.ID !== action.teamID);
      state.TEAMS = [...newState];
      const updatedState = JSON.parse(JSON.stringify(state));
      return updatedState;
    }

    default:
      return state;
  }
};
