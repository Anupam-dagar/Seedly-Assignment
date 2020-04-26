import React, { Component } from "react";
import { Image, Media } from "react-bootstrap";
import author from "../assets/author.png";

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
    };
  }

  componentDidUpdate(earlierProps) {
    if (earlierProps.content !== this.props.content) {
      this.setState({ content: this.props.content });
    }
  }

  render() {
    return (
      <Media>
        <Media.Body className="mr-3">
          <p className="text-justify text-break">{this.state.content}</p>
        </Media.Body>
        <Image src={author} width={60} rounded />
      </Media>
    );
  }
}

export default Answer;
