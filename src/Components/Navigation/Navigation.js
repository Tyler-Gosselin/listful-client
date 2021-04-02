import React from "react";
import { NavLink } from "react-router-dom";

const Naigavtion = () => {
  return (
    <div className="nav_bar_wrapper">
      <div className="nav_bar_left">
        <NavLink
          exact
          to="/"
          activeClassName="nav_link_active"
          className="logo"
        >
          <h1>ListFul</h1>
        </NavLink>
      </div>
      <div className="nav_bar_right">
        <NavLink
          className="nav_link"
          activeClassName="nav_link_active"
          to="/account"
        >
          Account
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="nav_link_active"
          to="/list_manage"
        >
          Lists
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="nav_link_active"
          to="/auth"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Naigavtion;
