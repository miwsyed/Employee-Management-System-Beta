import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

import EmployeeTable from "./EmployeeTable";

const ViewAllEmployees = () => {
  const [searchText, setSearchText] = useState("");
  const [searchId, setSearchID] = useState("");

  return (
    <div className="container ">
      <div className="row d-flex flex-column">
        <div className="w-100 d-flex justify-content-end ">
          <Link
            to={`/add-new-employee`}
            className="btn btn-outline-dark my-5  align-content-end justify-content-end "
          >
            Add New Employee
          </Link>
        </div>
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
          <EmployeeTable searchText={searchText} searchId={searchId} />
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

export default memo(ViewAllEmployees);
