import React from "react";
import { useEmployee } from "../Context/EmployeeProvider";

const ViewAllEmployees = () => {
  const employees = useEmployee();
  const allEmployees = employees.EMPLOYEES;
  console.log(allEmployees);
  return (
    <div>
      <div className="container shadow mt-lg-5">
        <ul className="list-group list-group-flush">
          {allEmployees.map((e) => {
            return (
              <li key={e.ID} className="list-group-item">
                {e.NAME}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ViewAllEmployees;
