import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SidebarStats from "../SidebarStats/SidebarStats";

const Sidebar = () => {
  const logged = useSelector(state => state.loginReducer.logged);

  return (
    <div className="sidebar bg-dark text-white h-100 mt-2 px-2 py-2 rounded-lg">
      <div
        className="rounded-lg border border-light h-100"
        style={{ paddingLeft: "10px", paddingTop: "10px" }}
      >
        <h6>Game Navigation</h6>
        {!logged ? (
          <div className="links">
            <Link to="/"> Home </Link>
            <br />
            <Link to="/register"> Register </Link>
            <br />
            <Link to="/screenshots"> Screenshots </Link>
            <br />
          </div>
        ) : (
          <div className="links">
            <Link to="/"> Home </Link>
            <br />
            <Link to="/explore"> Explore </Link>
            <br />
            <Link to="/items"> Items </Link>
            <br />
            <Link to="/skills"> Skills </Link>
            <br />
            <Link to="/bank"> Bank </Link>
            <br />
            <Link to="/storage"> Storage </Link>
            <br />
          </div>
        )}
        <SidebarStats />
      </div>
    </div>
  );
};

export default Sidebar;
