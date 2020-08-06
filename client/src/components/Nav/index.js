import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const buttonStyle = {
  float: "right"
}

class Nav extends Component {


  logOut = () =>{
    axios.get('/auth/logout').then((res) =>{
      window.location= "/"
    })
 }; 

 render(){
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
          <button onClick={this.logOut}>Log out</button>
        </ul>
      </div>
    </nav>
  );

            }


}

export default Nav;
