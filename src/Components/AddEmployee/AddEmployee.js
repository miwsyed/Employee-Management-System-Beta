import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployee, useEmployeeDispatch } from "../Context/EmployeeProvider";
/// PLANS FOR LATER IMPLEMENT DEBOUNCED VALIDATION
const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const params = useParams();
  const dispatchEmployee = useEmployeeDispatch();
  const employees = useEmployee();

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
        const newID =
          Number(
            employees.EMPLOYEES.slice(employees.EMPLOYEES.length - 1)[0].ID
          ) + 1;
        const addMemberObj = {
          NAME: name,
          ID: newID,
          PHONE: phone,
          EMAIL: email,
          TEAMS_ID: params.teamId,
        };
        //make the dispatch item
        const data = addMemberObj;
        //send dispatch
        dispatchEmployee({ type: "ADD_EMPLOYEE", data });
        //navigate back to team details page
        navigate(`/admin/team-details/${params.teamId}`);
      }
    } else alert("Please fill details correctly");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-5 mt-5 mx-auto shadow ">
          <p
            style={{ fontSize: "3rem" }}
            className="text-center text-dark py-3 display-2"
          >
            Add Team Member
          </p>
          <form onSubmit={handleSubmit}>
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

export default AddEmployee;
