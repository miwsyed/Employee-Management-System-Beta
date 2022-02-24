import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";
const EmployeeTable = ({ searchText, searchId }) => {
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
    navigate(`/departments/employees/under-tl/${id}`);
  };
  return (
    <div>
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
                    else if (e.ID.includes(searchText.toUpperCase)) return e;
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
                            <span style={{ color: "red", fontWeight: "bold" }}>
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
                            <span style={{ color: "red", fontWeight: "bold" }}>
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
  );
};

export default memo(EmployeeTable);
