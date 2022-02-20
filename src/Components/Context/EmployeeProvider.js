// Create a user context for admin state.

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialData } from "../DB/InitialData";
const EmployeeContext = createContext();
const DispatchEmployeeContext = createContext();
const IsAdminContext = createContext();
const SetIsAdminContext = createContext();

const LS_EMPLOYEES_KEY = "employee_base";
const LS_IS_ADMIN_KEY = "is_admin";

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEAM_LEAD": {
      return 1;
    }

    case "UPDATE_TEAM_LEAD": {
      return 2;
    }

    case "ADD_EMPLOYEE": {
      return 3;
    }

    case "UPDATE_EMPLOYEE": {
      return 4;
    }

    case "REMOVE_EMPLOYEE": {
      return 5;
    }

    case "ADD_TEAM": {
      return 6;
    }

    case "REMOVE_TEAM": {
      return 6;
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

  const [isAdmin, setIsAdmin] = useState((initialValue) => {
    const isAdminpersistedValue = localStorage.getItem(LS_IS_ADMIN_KEY);
    return isAdminpersistedValue
      ? JSON.parse(isAdminpersistedValue)
      : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(LS_EMPLOYEES_KEY, JSON.stringify(employee));
    localStorage.setItem(LS_IS_ADMIN_KEY, JSON.stringify(isAdmin));
  }, [employee, isAdmin]);

  return (
    <DispatchEmployeeContext.Provider value={dispatchEmployee}>
      <EmployeeContext.Provider value={employee}>
        <SetIsAdminContext.Provider value={setIsAdmin}>
          <IsAdminContext.Provider value={isAdmin}>
            {children}
          </IsAdminContext.Provider>
        </SetIsAdminContext.Provider>
      </EmployeeContext.Provider>
    </DispatchEmployeeContext.Provider>
  );
};

export const useEmployeeDispatch = () => useContext(DispatchEmployeeContext);
export const useEmployee = () => useContext(EmployeeContext);
export const useSetIsAdminContext = () => useContext(SetIsAdminContext);
export const useIsAdminContext = () => useContext(IsAdminContext);
