import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/homepage">
        Homepage
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/newgoals"
              className={
                window.location.pathname === "/homepage" || window.location.pathname === "/newgoals"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Create a Goal
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
