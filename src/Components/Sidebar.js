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
        className="flex-column d-none d-lg-block"
        activeKey={this.state.activeKey}
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
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/a">
              COVID-19
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/b">
              Payments
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/c">
              Robo Advisors
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/d">
              SeedlyTV S2E04
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/e">
              Fire Movement
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/f">
              MileLion
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/g">
              SG Budget Babe
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/h">
              Stocks Discussion
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/i">
              Investments
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/j">
              Insurance
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/k">
              Property
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/l">
              Credit Cards
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/m">
              Savings
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/n">
              Lifestyle
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/o">
              Family
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/p">
              Retirement
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/q">
              Career
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/r">
              Savings Accounts
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/s">
              Loans
            </Nav.Link>
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/t">
              CPF
            </Nav.Link>
          </Card.Body>
        </Card>
      </Nav>
    );
  }
}

export default Sidebar;
