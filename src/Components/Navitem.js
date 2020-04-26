import React from "react";
import { Nav } from "react-bootstrap";

// Navitem Component (Individual item in navigation bar.)
export function NavItem(props) {
  return (
    <Nav.Link
      eventKey={props.data}
      className={`${
        props.index === 0 ? "text-primary" : 'text-navbar'
      } font-weight-bold nav-fontsize`}
    >
      {props.data}
    </Nav.Link>
  );
}

export default NavItem;
