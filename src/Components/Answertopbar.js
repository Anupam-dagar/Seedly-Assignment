import React, { Component } from "react";
import { Image, Media } from "react-bootstrap";
import author from "../assets/author.png";

// Answer Top Bar Component (Displays answer author information)
export class AnswerTopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      time: this.props.time,
    };
  }

  componentDidUpdate(earlierProps) {
    earlierProps.user !== this.props.user &&
      this.setState({ user: this.props.user });
    earlierProps.time !== this.props.time &&
      this.setState({ time: this.props.time });
  }

  render() {
    return (
      <Media>
        <Image src={author} className="mr-3" width={35} rounded />
        <Media.Body>
          <div className="author">
            {this.state.user.name}
            {this.state.user.designation !== "" &&
              `, ${this.state.user.designation}`}
          </div>
          <span className="text-primary font-weight-bold">
            {this.state.user.level.name}
          </span>{" "}
          <span className="ml-1 text-secondary">
            Updated {this.state.time}h ago
          </span>
        </Media.Body>
      </Media>
    );
  }
}

export default AnswerTopBar;
