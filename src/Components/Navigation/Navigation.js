import React from "react";
import { NavLink } from "react-router-dom";

const Naigavtion = () => {
  return (
    <div className="nav_bar_wrapper">
      <div className="nav_bar_left">
        <NavLink
          exact
          to="/"
          activeClassName="nav-link-active"
          className="logo"
        >
          <h1>ListFull</h1>
        </NavLink>
      </div>
      <div className="nav_bar_right">
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/list_manage">Lists</NavLink>
        <NavLink to="/auth">Login</NavLink>
      </div>
    </div>
  );
};

export default Naigavtion;
