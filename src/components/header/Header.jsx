import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const RouteChange = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="header">
        <div className="row">
          <div className="col-4 mt-3 ml-4">
            <p className="text">Where in the world?</p>
          </div>
          <div className="col-4 mt-3 ml">
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <button onClick={RouteChange} className="btn btn-primary m-4">
        Back
      </button>
    </div>
  );
};

export default Header;
