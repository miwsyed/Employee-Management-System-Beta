import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";

const ViewAllEmployees = () => {
  const [searchText, setSearchText] = useState("");
  const [searchId, setSearchID] = useState("");

  //optimise later
  const employees = useEmployee();
  const allEmployees = employees.EMPLOYEES;
  const allTeams = employees.TEAMS;
  const navigate = useNavigate();
  //get All present team Leads
  const allTeamLeads = allTeams.map((e) => e.TEAM_LEADER_ID);
  const isTeamLead = (id) => {
    return allTeamLeads.includes(id);
  };

  const handleOnClickTL = (id) => {
    console.log("inhere");
    navigate(`/admin/employees/under-tl/${id}`);
  };
  console.log(searchText.toUpperCase());

  return (
    <div className="container ">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <div className="input-group d-flex justify-content-between w-100 ">
            <div className="d-inline-flex col-xxl-4 col-lg-7 col-md-7 col-sm-12">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search by name, phone number or email Id "
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="d-inline-flex ">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search by Employee Id"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(e) => setSearchID(e.target.value)}
              />
            </div>
          </div>
          <table
            className="table table-hover shadow mt-5 table-responsive"
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
                searchText.length > 0 ? (
                  <>
                    {allEmployees
                      .filter((e) => {
                        if (e.NAME.includes(searchText.toUpperCase())) return e;
                        else if (e.EMAIL.includes(searchText.toLowerCase()))
                          return e;
                        else if (e.PHONE.includes(searchText)) return e;
                        else if (e.ID.includes(searchText.toUpperCase))
                          return e;
                      })
                      .map((elm, id) => (
                        <tr key={elm.ID}>
                          <td className="">{elm.ID} </td>
                          <td>
                            {isTeamLead(elm.ID) ? (
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={() => handleOnClickTL(elm.ID)}
                              >
                                {elm.NAME}{" "}
                                <span
                                  style={{ color: "red", fontWeight: "bold" }}
                                >
                                  TL
                                </span>
                              </div>
                            ) : (
                              <>
                                {elm.NAME}
                                <span
                                  style={{
                                    color: "lightBlue",
                                    fontWeight: "bold",
                                  }}
                                >
                                  TM
                                </span>
                              </>
                            )}
                          </td>
                          <td>{elm.EMAIL}</td>
                          <td>{elm.PHONE}</td>
                        </tr>
                      ))}
                  </>
                ) : (
                  <>
                    {allEmployees
                      .filter((e) => {
                        if (searchId.length === 0) return e;
                        else if (e.ID.includes(searchId)) return e;
                      })
                      .map((elm, id) => (
                        <tr key={elm.ID}>
                          <td className="">{elm.ID} </td>
                          <td>
                            {isTeamLead(elm.ID) ? (
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={() => handleOnClickTL(elm.ID)}
                              >
                                {elm.NAME}{" "}
                                <span
                                  style={{ color: "red", fontWeight: "bold" }}
                                >
                                  TL
                                </span>
                              </div>
                            ) : (
                              <>
                                {elm.NAME}
                                <span
                                  style={{
                                    color: "lightBlue",
                                    fontWeight: "bold",
                                  }}
                                >
                                  TM
                                </span>
                              </>
                            )}
                          </td>
                          <td>{elm.EMAIL}</td>
                          <td>{elm.PHONE}</td>
                        </tr>
                      ))}
                  </>
                )
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
        @media only screen and (max-width: 992px) {
          .table{
            display: block !important;
            overflow-x: auto !important;
            width: 100% !important;
          }
        }
        
        `}</style>
    </div>
  );
};

export default ViewAllEmployees;
