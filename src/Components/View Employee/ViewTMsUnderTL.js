import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";

const ViewTMsUnderTL = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const params = useParams();
  const TLID = String(params.tlID);
  const employees = useEmployee();
  const allTeams = employees.TEAMS;
  const allEmployees = employees.EMPLOYEES;

  const getTTMdetails = () => {
    const isPresent = allTeams.some((e) => e.TEAM_LEADER_ID === TLID);
    if (isPresent) {
      const getTeam = allTeams.find((e) => e.TEAM_LEADER_ID === String(TLID));
      const getTMIDs = getTeam.TEAM_MEMBERS_ID.filter((e) => e).flat(Infinity);

      const fetchTeamMembers = getTMIDs.map((e) =>
        allEmployees.find((r) => e === r.ID)
      );
      setTeamMembers(fetchTeamMembers);
    }
  };
  useEffect(() => {
    getTTMdetails();
  }, []);

  return (
    <div className="container ">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search by email Id, phone number, email or phone number"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-dark">
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
              {teamMembers.length > 0 ? (
                teamMembers.map((elm, id) => (
                  <tr key={id}>
                    <td className="">{elm.ID} </td>
                    <td>
                      <>
                        {elm.NAME}
                        <span
                          style={{ color: "lightBlue", fontWeight: "bold" }}
                        >
                          TM
                        </span>
                      </>
                    </td>
                    <td>{elm.EMAIL}</td>
                    <td>{elm.PHONE}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No Team Members found</th>
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

export default ViewTMsUnderTL;
