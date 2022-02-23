import React, { useEffect } from "react";
import { useEmployee } from "../Context/EmployeeProvider";

const ViewAllEmployees = () => {
  const employees = useEmployee();
  const allEmployees = employees.EMPLOYEES;
  const depts = employees.DEPARTMENTS;
  const allTeamLeads = depts
    .map((e) => e.TEAMS_IDS.filter((r) => r))
    .flat(Infinity);

  const isTeamLead = (id) => {
    return allTeamLeads.includes(id);
  };

  const handleOnClick = (id) => {};

  useEffect(() => {
    console.log(allTeamLeads);
    console.log(allEmployees);
  }, []);

  return (
    <div className="container ">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search by email Id, phone number, email or phone number"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" class="btn btn-outline-dark">
              search
            </button>
          </div>
          <table
            className="table table-hover shadow mt-5"
            style={{ cursor: "default" }}
          >
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {allEmployees.length > 0 ? (
                allEmployees.map((elm, id) => (
                  <tr key={id}>
                    <td className="">{elm.ID} </td>
                    <td>
                      {isTeamLead(elm.ID) ? (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={handleOnClick(elm.ID)}
                        >
                          {elm.NAME}{" "}
                          <span style={{ color: "red", fontWeight: "bold" }}>
                            TL
                          </span>
                        </div>
                      ) : (
                        <>
                          {elm.NAME}
                          <span
                            style={{ color: "lightBlue", fontWeight: "bold" }}
                          >
                            TM
                          </span>
                        </>
                      )}
                    </td>
                    <td>{elm.EMAIL}</td>
                    <td>{elm.PHONE}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        .custom-del-btn{
          display : inline-flex;
          margin-inline :5px !important;
        }
        `}</style>
    </div>
  );
};

export default ViewAllEmployees;
