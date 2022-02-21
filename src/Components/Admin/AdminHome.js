import React, { useEffect, useState } from "react";
import { useEmployee } from "../Context/EmployeeProvider";
import DepartmentCard from "./DepartmentCard";

const AdminHome = () => {
  //calling the useEmployee context.
  const employees = useEmployee();

  // hook to store department names so we can display them.
  const [departments, setDepartMents] = useState([]);

  //function to get department names.
  const getAllDepartments = () => {
    setDepartMents(employees.DEPARTMENTS);
  };
  useEffect(() => {
    getAllDepartments();
  }, []);

  /* Get HOD Name*/
  const getHOD = (id) => {
    const allEmployee = employees.EMPLOYEES;
    const hodName = allEmployee.filter((e) => e.ID === id);
    return hodName[0].NAME;
  };

  return (
    <>
      <div>
        {departments.length > 0 &&
          departments.map((elm, idx) => {
            return (
              <React.Fragment key={idx}>
                <DepartmentCard
                  deptName={elm.NAME}
                  deptDescription={elm.DESCRIPTION}
                  HOD={getHOD(elm.HOD_ID)}
                  deptId={elm.ID}
                />
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default AdminHome;
