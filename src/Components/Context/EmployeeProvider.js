// Create a user context for admin state.

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialData } from "../DB/InitialData";
import { Reducer } from "./ReducerFunction";
//creating Providers
const EmployeeContext = createContext();
const DispatchEmployeeContext = createContext();

//creating a localStorage key
const LS_EMPLOYEES_KEY = "employee_base";

//exporting provider function
export const EmployeeProvider = ({ children }) => {
  //creating a userRecucer for state managment Reducer is imported from ReducerFunction.
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

  //update the local storage as soon as employee state changes
  useEffect(() => {
    localStorage.setItem(LS_EMPLOYEES_KEY, JSON.stringify(employee));
  }, [employee]);

  //creating Context API wrappers.
  return (
    <DispatchEmployeeContext.Provider value={dispatchEmployee}>
      <EmployeeContext.Provider value={employee}>
        {children}
      </EmployeeContext.Provider>
    </DispatchEmployeeContext.Provider>
  );
};

//exporting functions so that they can be directly used.
export const useEmployeeDispatch = () => useContext(DispatchEmployeeContext);
export const useEmployee = () => useContext(EmployeeContext);
