import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEmployee, useEmployeeDispatch } from "../Context/EmployeeProvider";
import TransferModal from "./TransferModal";

const TeamDetailsCard = ({ teamMemberDetails, teamLeadDetails, teamName }) => {
  //hooks
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [AvailableTeamDetails, setAvailableTeamDetails] = useState([]);
  const [transferTMID, settransferTMID] = useState(null);

  //contextAPI
  const dispatch = useEmployeeDispatch();
  const employees = useEmployee();

  //all deaprtments and all teams
  const allDepartMents = employees.DEPARTMENTS;
  const allTeams = employees.TEAMS;

  const deleteContact = (id) => {
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

  //transfer employee
  const handleTransfer = (id) => {
    setIsModelOpen(true);
    settransferTMID(id);
  };
  const handleClose = () => setIsModelOpen(false);

  //fetching all teams under department Id
  const location = useLocation();
  const handleTeams = useCallback(() => {
    //get department Id
    const deptID = location.state.deptID;
    //get All team Ids under department
    const AllteamIDs = allDepartMents
      .find((e) => e.ID === String(deptID))
      .TEAMS_IDS.filter((r) => r);
    // other teams under the department to which transfer is possible
    const nextTeamsID = AllteamIDs.filter((e) => e !== params.teamId);

    //get nextTeam details
    const nextTeamDetails = nextTeamsID.map((e) =>
      allTeams.find((r) => r.ID === e)
    );
    setAvailableTeamDetails(nextTeamDetails);
  }, [allDepartMents, allTeams, location.state.deptID, params.teamId]);

  useEffect(() => {
    handleTeams();
  }, [handleTeams]);

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
            Team : {teamName}
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
                      <div className="d-lg-flex justify-content-between">
                        <div className="mt-sm-2 mx-sm-2 mx-lg-0">
                          <button
                            onClick={() => handleEdit(elm.ID)}
                            className="btn btn-sm btn-outline-dark "
                            style={{ minWidth: "90px" }}
                          >
                            Edit
                          </button>
                        </div>{" "}
                        <div className="mt-sm-2 mx-sm-2 mx-lg-0">
                          <button
                            type="button"
                            onClick={() => deleteContact(elm.ID)}
                            style={{ minWidth: "90px" }}
                            className="btn btn-sm btn-outline-danger"
                            disabled={isTeamLead(elm.ID)}
                          >
                            Delete
                          </button>
                        </div>
                        <div className="mt-sm-2 mx-sm-2 mx-lg-0">
                          <button
                            onClick={() => handleTransfer(elm.ID)}
                            className=" btn btn-sm btn-outline-primary "
                            style={{ minWidth: "90px" }}
                            data-toggle="modal"
                            disabled={isTeamLead(elm.ID)}
                          >
                            Transfer
                          </button>
                        </div>
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
          <TransferModal
            isModalOpen={isModalOpen}
            handleClose={handleClose}
            AvailableTeamDetails={AvailableTeamDetails}
            transferTMID={transferTMID}
            baseTeamID={params.teamId}
          />
        </div>
      </div>{" "}
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
