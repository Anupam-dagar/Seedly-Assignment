import React from "react";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Advertisement(props) {
  return (
    <Card style={{ border: 0, width: "13rem" }}>
      <Card.Body>
        <Card.Title>Advertisement</Card.Title>
        <Container className="m-4">
          <FontAwesomeIcon icon={["fas", "bullhorn"]} size="5x" />
        </Container>
        <Card.Text>Advertisement runs here</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Advertisement;
