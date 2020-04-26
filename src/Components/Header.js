import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import headerImage from "../assets/header.svg";

// Header Component
function Header() {
  return (
    <Jumbotron
      fluid
      className="mx-auto mb-0"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "18rem",
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <div className="bd-highlight text-light">
          <h2>Let's Talk Finance</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="bd-highlight text-light text-center">
          Ask for opinions and get answers from other Singaporeans.
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 bd-highlight text-light">
          <Button className="btn-header font-weight-bold pl-6 pr-6 pt-2 pb-2">
            ASK A QUESTION
          </Button>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Header;
