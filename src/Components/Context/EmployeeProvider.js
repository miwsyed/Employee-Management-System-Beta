import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { initialData } from "../DB/InitialData";
const EmployeeContext = createContext();
const DispatchEmployeeContext = createContext();
const LS_KEY = "employee_base";
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

    default:
      return state;
  }
};

export const EmployeeProvider = ({ children }) => {
  const [employee, dispatchEmployee] = useReducer(
    Reducer,
    initialData,
    (initialValue) => {
      const persistedValue = localStorage.getItem(LS_KEY);
      return persistedValue ? JSON.parse(persistedValue) : initialValue;
    }
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(employee));
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
