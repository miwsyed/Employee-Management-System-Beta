import React, { memo, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEmployee, useEmployeeDispatch } from "../Context/EmployeeProvider";
import { validateFields, validateWithDataBase } from "./Validations";

const EditEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const params = useParams();

  //get team ID
  const location = useLocation();

  const employees = useEmployee();
  const empDetails = employees.EMPLOYEES.find(
    (e) => e.ID === params.employeeID
  );
  useEffect(() => {
    if (empDetails) {
      setName(empDetails.NAME);
      setEmail(empDetails.EMAIL);
      setPhone(empDetails.PHONE);
    }
  }, [empDetails]);
  // calling context API useEmployee
  const dispatchEmployee = useEmployeeDispatch();
  const navigate = useNavigate();

  //call validate fields function
  const callValidateFields = () => validateFields({ name, email, phone });

  //call validate with database function

  const callValidateWithDatabase = () =>
    validateWithDataBase({ employees, name, email, phone });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (callValidateFields() === true) {
      if (callValidateWithDatabase() === true) {
        const newID = params.employeeID;
        const addMemberObj = {
          NAME: name,
          ID: newID,
          PHONE: phone,
          EMAIL: email,
        };
        //make the dispatch item
        const data = addMemberObj;
        //send dispatch
        dispatchEmployee({ type: "UPDATE_EMPLOYEE", data });
        //navigate back to team details page
        navigate(`/departments/team-details/${location.state.teamID}`);
      }
    } else alert("Please fill details correctly");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="w-100 d-flex justify-content-end ">
          <Link
            to="/departments"
            className="btn btn-outline-dark my-5  align-content-end justify-content-end "
          >
            Back
          </Link>
        </div>
        <div className="col-md-6 mx-auto shadow p-5">
          {empDetails ? (
            <form onSubmit={handleSubmit}>
              <div>
                <h3 className="text-center">Update Employee Data</h3>
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-outline-dark">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  // onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(EditEmployee);
