import React, { Component } from "react";
import { Image, Media } from "react-bootstrap";
import author from "../assets/author.png";

class AnswerTopBar extends Component {
  render() {
    return (
      <Media>
        <Image src={author} className="mr-3" width={35} rounded />
        <Media.Body>
          <div className="author">
            Colin Lim, Financial Services Consultant at Colin Lim
          </div>
          <span className="text-primary font-weight-bold">Level 2. Rookie</span>{" "}
          <span className="ml-1 text-secondary">Updated 18h ago</span>
        </Media.Body>
      </Media>
    );
  }
}

export default AnswerTopBar;
