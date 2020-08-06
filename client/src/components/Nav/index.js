import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Welcome to Goal-Getter!
      </a>
      {props.children}
    </nav>
  );
}

export default Nav;
