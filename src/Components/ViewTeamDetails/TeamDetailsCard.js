import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEmployeeDispatch } from "../Context/EmployeeProvider";

const TeamDetailsCard = ({ teamMemberDetails, teamLeadDetails }) => {
  const dispatch = useEmployeeDispatch();
  const deleteContact = (id) => {
    var answer = window.confirm(
      "Are you are about to delete the selected employee, please click OK to confirm?"
    );

    dispatch({ type: "DELETE_EMPLOYEE", id });
  };
  const params = useParams();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`, { state: { teamID: params.teamId } });
  };

  const isTeamLead = (id) => {
    return teamLeadDetails.some((e) => e.ID === id);
  };

  return (
    <div className="container ">
      <div className="row d-flex flex-column">
        <div className="w-100 d-flex justify-content-end ">
          <Link
            to={`/add-member/${params.teamId}`}
            className="btn btn-outline-dark my-5  align-content-end justify-content-end "
          >
            Add New Team Member
          </Link>
        </div>
        <div className="col-md-10 mx-auto my-4">
          <p
            style={{ fontSize: "3rem" }}
            className="text-center text-dark py-3 display-2"
          >
            Team : {"team"}
          </p>

          <table
            className="table table-hover shadow"
            style={{ cursor: "default" }}
          >
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col"># </th>

                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Quick Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamMemberDetails.length > 0 ? (
                teamMemberDetails.map((elm, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td className="">{elm.ID} </td>
                    <td>
                      {elm.NAME}{" "}
                      {isTeamLead(elm.ID) ? (
                        <>
                          <span style={{ color: "red", fontWeight: "bold" }}>
                            TL
                          </span>
                        </>
                      ) : (
                        <>
                          {" "}
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
                    <td className="quickActions">
                      <button
                        onClick={() => handleEdit(elm.ID)}
                        className="btn btn-sm btn-outline-dark "
                      >
                        Edit
                      </button>
                      <div className="custom-del-btn">
                        <button
                          type="button"
                          onClick={async () => await deleteContact(elm.ID)}
                          className="btn btn-sm btn-outline-danger"
                          disabled={isTeamLead(elm.ID)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
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

export default TeamDetailsCard;
