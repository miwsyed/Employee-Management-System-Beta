import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useEmployeeDispatch } from "../Context/EmployeeProvider";

const TransferModal = ({
  isModalOpen,
  handleClose,
  AvailableTeamDetails,
  transferTMID,
  baseTeamID,
}) => {
  const dispatch = useEmployeeDispatch();
  const targetTeamId = AvailableTeamDetails.map((e) => e.ID);

  const handleClick = () => {
    dispatch({
      type: "SWITCH_EMPLOYEE",
      data: {
        teamMemberID: String(transferTMID),
        baseTeamID: String(baseTeamID),
        targetTeamId: String(targetTeamId),
      },
    });
    handleClose();
  };

  return (
    <>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Available Teams</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {AvailableTeamDetails.length > 0 ? (
            <>
              {AvailableTeamDetails.map((e) => {
                return (
                  <div key={e.ID} className="card" style={{ width: "15rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{e.NAME}</h5>
                      <p className="card-text">
                        Total Members : {e?.TEAM_MEMBERS_ID.length + 1}
                      </p>
                      <button
                        onClick={() => handleClick()}
                        className="btn btn-primary"
                      >
                        Transfer
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h5>No Other Teams available</h5>
            </>
          )}{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TransferModal;
