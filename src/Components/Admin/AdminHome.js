import React, { useEffect, useState } from "react";
import { useEmployee } from "../Context/EmployeeProvider";

const AdminHome = () => {
  //calling the useEmployee context.
  const employees = useEmployee();

  // hook to store department names so we can display them.
  const [departments, setDepartMents] = useState([]);

  //function to get department names.
  const getAllDepartments = () => {
    const database = employees.DATABASE;
    const depts = database.filter((e) => e.DEPARTMENT_DETAILS);

    const deptNames = [];
    for (let i = 0; i < depts.length; i++) {
      const dname = depts[i].DEPARTMENT_DETAILS[0];
      deptNames.push(dname);
    }
    console.log(database);
    setDepartMents(deptNames);
  };
  useEffect(() => {
    getAllDepartments();
  }, []);

  departments && console.log(departments);

  return (
    <>
      {/* {departments.length > 0 &&
        departments.map((elm, idx) => {
          return (
            <div key={idx} className="card w-25" style={{ width: "1rem;" }}>
              <div className="card-body">
                <h5 className="card-title">{elm}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          );
        })} */}
    </>
  );
};

export default AdminHome;
