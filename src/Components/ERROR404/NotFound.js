import React from "react";

const NotFound = () => {
  return (
    <div className=" vh-100 d-flex justify-content-center align-items-center ">
      <div className="d-flex flex-column ">
        <h2 className="text-center ">ERROR404</h2>
        <h4 className="text-center ">Oops! Something Went Wrong</h4>
        <h6>
          We are very sorry for the inconvenience. It looks you are trying to
          access a page that either has been deleted or did not exist!
        </h6>
      </div>
    </div>
  );
};

export default NotFound;
