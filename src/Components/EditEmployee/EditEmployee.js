import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";

const EditEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const params = useParams();

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

  const currentContact = [];
  const handleSubmit = () => {};
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
          {currentContact ? (
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
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
