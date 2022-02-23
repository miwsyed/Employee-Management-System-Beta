import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEmployee, useEmployeeDispatch } from "../Context/EmployeeProvider";

const EditEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState([]);
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

  const dispatchEmployee = useEmployeeDispatch();
  const navigate = useNavigate();

  //validation function later move it to validations folder.
  const validateFields = () => {
    if (name === "") return false;
    else if (email === "") return false;
    else if (phone === "" || phone.length < 10 || phone.length > 13)
      return false;
    return true;
  };
  const validateWithDataBase = () => {
    const isValid = !employees.EMPLOYEES.map((e) => {
      if (e.NAME === name.trim()) {
        alert("Name Already exists");
        return false;
      } else if (e.EMAIL === email.trim()) {
        alert("Email Already exists");
        return false;
      } else if (e.PHONE === phone.trim()) {
        alert("Phone Already exists");
        return false;
      }
      return true;
    }).some((e) => e === false);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields() === true) {
      if (validateWithDataBase() === true) {
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
        navigate(`/admin/team-details/${location.state.teamID}`);
      }
    } else alert("Please fill details correctly");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="w-100 d-flex justify-content-end ">
          <Link
            to="/admin"
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

export default EditEmployee;
