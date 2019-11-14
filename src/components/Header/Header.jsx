import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import AuthButton from "../AuthButton/AuthButton";
import { Link } from "react-router-dom";
import { formatDateTime } from "../../util/helpers";

const Header = () => (
  <div>
    <Navbar bg="dark" variant="dark" className="pb-3">
      <Navbar.Brand className="ml-5" as={Link} to="/">
        <img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {" Maze"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="font-weight-light text-muted">
            {formatDateTime(new Date())}
          </div>
        </Nav>
        <AuthButton />
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
