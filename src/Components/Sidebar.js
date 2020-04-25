import React, { Component } from "react";
import { Nav, Card } from "react-bootstrap";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "/",
    };
  }

  handleClick(route, e) {
    this.setState({ activeKey: route });
  }

  render() {
    return (
      <Nav
        className="flex-column"
        onSelect={(route, e) => this.handleClick(route, e)}
      >
        <Card style={{ border: 0, width: "13rem" }}>
          <Card.Body className="pt-2 pb-2 pl-2 pr-2">
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              All Questions
            </Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ border: 0, width: "13rem" }} className="mt-2">
          <Card.Body className="pt-2 pb-2 pl-2 pr-2">
            <Card.Title className="pl-1 pr-1">Featured Topics</Card.Title>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              COVID-19
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Payments
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Robo Advisors
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              SeedlyTV S2E04
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Fire Movement
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              MileLion
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              SG Budget Babe
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Stocks Discussion
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Investments
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Insurance
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Property
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Credit Cards
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Savings
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Lifestyle
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Family
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Retirement
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Career
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Savings Accounts
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              Loans
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              CPF
            </Nav.Link>
          </Card.Body>
        </Card>
      </Nav>
    );
  }
}

export default Sidebar;
