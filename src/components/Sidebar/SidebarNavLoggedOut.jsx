import React from "react";
import { Link } from "react-router-dom";

const SidebarNavLoggedOut = () => {
  return (
    <div className="links">
      <Link to="/"> Home </Link>
      <br />
      <Link to="/register"> Register </Link>
      <br />
      <Link to="/screenshots"> Screenshots </Link>
      <br />
    </div>
  );
};

export default SidebarNavLoggedOut;
