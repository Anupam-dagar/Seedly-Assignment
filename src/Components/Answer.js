import React, { Component } from "react";
import { Image, Media } from "react-bootstrap";
import author from "../assets/author.png";

class Answer extends Component {
  render() {
    return (
      <Media>
        <Media.Body className="mr-3">
          <p className="text-justify text-break">
            I made a fluffy souffle omelet with my Mum during the circuit
            breaker. How much it cost: 70 cents (for 2 eggs, butter, a dash of
            salt and sugar) Share why you decided to cook that dish(es) It is a
            simple, delicious, nutritious and very cheap meal that ANYONE can
            make! It only requires a couple of ingredients: 2 eggs and butter
            and some and some arm power A useful cooking tip you have: Don't be
            disheartened if it doesn't work out the first time, practice does
            make perfect! (this is the product of my second attempt)
          </p>
        </Media.Body>
        <Image src={author} width={60} rounded />
      </Media>
    );
  }
}

export default Answer;
