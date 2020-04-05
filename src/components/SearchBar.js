import React from "react";
import { Link, useLocation } from "react-router-dom";
import  "./SearchBar.css";

function SearchBar() {
  const location = useLocation();

  return (
    <div className="jumbotron">
      <div className="container d-flex justify-content-around flex-wrap">
        <Link to="/">
          <button
            className={
              location.pathname === "/" ? "btn btn-light" : "btn btn-dark"
            }
          >
            All Employees
          </button>
        </Link>
        <Link to="/employees/male">
          <button
            className={
              location.pathname === "/employees/male"
                ? "btn btn-light"
                : "btn btn-dark"
            }
          >
            Men Only
          </button>
        </Link>
        <Link to="/employees/female">
          <button
            className={
              location.pathname === "/employees/female"
                ? "btn btn-light"
                : "btn btn-dark"
            }
          >
            Woman Only
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
