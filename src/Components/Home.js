import React from "react";

const Home = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center ">
      <div
        style={{ minHeight: "50vh" }}
        className="d-flex flex-column container shadow"
      >
        <h2 className="text-center">Employee Management System</h2>
        <hr />
        <h5>
          <b>Useful Info</b> <br />
          To add team or team member please use employee Id's from localStorage
        </h5>
        <p>List of functionalities in the upcoming version</p>

        <ul>
          <li>Team Switch Functionality</li>
          <li>Over all UI and responsive enhancements</li>
          <li>
            Sticky Bench Sidebar which can be toggled by an icon which will show
            all the employees and their employee IDS which are not yet assigned
            to any team or have been removed from the previous team. You can
            permanently remove the employee from that sidebar, And can also have
            a reference to look to when adding employees to a team, as you need
            to have employee ID's to add them.
          </li>
          <li>
            Removal of all the above mentioned Useful Info and an attractive
            landing page
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
