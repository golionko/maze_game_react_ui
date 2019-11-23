import React from "react";
import { Link } from "react-router-dom";

const SidebarNavLoggedIn = () => {
  return (
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
  );
};

export default SidebarNavLoggedIn;
