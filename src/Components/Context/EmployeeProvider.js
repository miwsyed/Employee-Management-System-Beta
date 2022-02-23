// Create a user context for admin state.

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialData } from "../DB/InitialData";
const EmployeeContext = createContext();
const DispatchEmployeeContext = createContext();

const LS_EMPLOYEES_KEY = "employee_base";

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEAM_UNDER_DEPARTMENT": {
      const newState = JSON.parse(JSON.stringify(state));
      let newTeamID = action.dataNewTeamAndDepartment.TEAM_ID;
      let departmentID = action.dataNewTeamAndDepartment.DEPARTMENT_ID;
      let getDept = newState.DEPARTMENTS.find((e) => e.ID === departmentID);
      getDept.TEAMS_IDS.push(newTeamID);

      return newState;
    }

    case "ADD_EMPLOYEE": {
      //adding employee
      const employees = state.EMPLOYEES;
      employees.push(action.data);
      state.EMPLOYEES = [...employees];
      // state = JSON.parse(JSON.stringify(state));
      //adding employee to team
      state.TEAMS.filter(
        (e) => e.ID === action.data.TEAMS_ID
      )[0].TEAM_MEMBERS_ID.push(action.data.ID);

      return state;
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
      newState = newState.EMPLOYEES.filter((e) => e.ID !== action.id);
      state.EMPLOYEES = [...newState];
      const updatedState = JSON.parse(JSON.stringify(state));
      return updatedState;
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

export const EmployeeProvider = ({ children }) => {
  const [employee, dispatchEmployee] = useReducer(
    Reducer,
    initialData,
    (initialValue) => {
      const employeesPersistedValue = localStorage.getItem(LS_EMPLOYEES_KEY);
      return employeesPersistedValue
        ? JSON.parse(employeesPersistedValue)
        : initialValue;
    }
  );

  useEffect(() => {
    localStorage.setItem(LS_EMPLOYEES_KEY, JSON.stringify(employee));
  }, [employee]);

  return (
    <DispatchEmployeeContext.Provider value={dispatchEmployee}>
      <EmployeeContext.Provider value={employee}>
        {children}
      </EmployeeContext.Provider>
    </DispatchEmployeeContext.Provider>
  );
};

export const useEmployeeDispatch = () => useContext(DispatchEmployeeContext);
export const useEmployee = () => useContext(EmployeeContext);
