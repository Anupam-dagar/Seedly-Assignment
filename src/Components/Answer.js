import React, { Component } from "react";
import { Image, Media, Button } from "react-bootstrap";
import author from "../assets/author.png";

// Answer Component (Displays answer for the question)
class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
      expandClass: "ans-content",
      expandText: "More",
    };
  }

  componentDidUpdate(earlierProps) {
    earlierProps.content !== this.props.content &&
      this.setState({ content: this.props.content });
  }

  readMore() {
    this.state.expandText === "More"
      ? this.setState({
          expandClass: "ans-content-expanded",
          expandText: "Less",
        })
      : this.setState({ expandClass: "ans-content", expandText: "More" });
  }

  render() {
    return (
      <Media>
        <Media.Body className="mr-3">
          <p className={`text-justify text-break ${this.state.expandClass}`}>
            {this.state.content}
          </p>
          <a
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => this.readMore()}
          >
            {this.state.expandText}
          </a>
        </Media.Body>
        <Image src={author} width={60} rounded />
      </Media>
    );
  }
}

export default Answer;
