import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import headerImage from "../assets/header.svg";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Header Component
export function Header(props) {
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
      <div className="d-flex justify-content-center align-items-center">
        {props.numAnswers && (
          <div className="bd-highlight text-light text-center">
            {props.numAnswers} Questions answered
            <Button className="btn-header-follow font-weight-bold pl-4 pr-4 pt-1 pb-1 ml-3">
              <FontAwesomeIcon icon={["fas", "plus"]} className="mr-1" />
              Follow
            </Button>
          </div>
        )}
      </div>
    </Jumbotron>
  );
}

const mapStateToProps = (state) => ({
  numAnswers: state.questions.numAnswers,
});

export default connect(mapStateToProps, null)(Header);
