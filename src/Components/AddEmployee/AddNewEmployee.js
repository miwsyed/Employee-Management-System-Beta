import React, { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployee, useEmployeeDispatch } from "../Context/EmployeeProvider";
import { validateFields, validateWithDataBase } from "./Validations";
/// PLANS FOR LATER IMPLEMENT DEBOUNCED VALIDATION
const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const dispatchEmployee = useEmployeeDispatch();
  const employees = useEmployee();

  //calling validating functions
  const callValidateFields = () => validateFields({ name, email, phone });

  //calling function to validate with database
  const callValidateWithDatabase = () =>
    validateWithDataBase({ name, email, phone, employees });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (callValidateFields() === true) {
      if (callValidateWithDatabase() === true) {
        const newID =
          Number(
            employees.EMPLOYEES.slice(employees.EMPLOYEES.length - 1)[0].ID
          ) + 1;
        const addMemberObj = {
          NAME: name,
          ID: String(newID),
          PHONE: phone,
          EMAIL: email,
        };
        //make the dispatch item
        const data = addMemberObj;
        //send dispatch
        dispatchEmployee({ type: "ADD_NEW_EMPLOYEE", data });
        //navigate back to team details page
        navigate(`/employees`);
      }
    } else alert("Please fill details correctly");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-5 mt-5 mx-auto shadow ">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-5">
              <h3>Add New Employee</h3>
            </div>
            <div className="form-group ">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

export default memo(AddEmployee);
