import React, { Component } from "react";
import { Image } from "react-bootstrap";
import appstore from "../assets/app-store.png";
import playstore from "../assets/google-play.png";
import FooterIcons from "./Footericons";

// Footer Component
export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          heading: "Company",
          tags: ["About", "Contact", "Careers", "Privacy", "Terms"],
        },
        {
          heading: "Product Reviews",
          tags: [
            "Credit Cards",
            "Electricity Retailers",
            "Mobile Plans",
            "Online Brokerages",
            "P2P Lending",
            "Robo-Advisors",
            "Savings Accounts",
            "Travel Insurance",
          ],
        },
        {
          heading: "Quick Tools",
          tags: ["Savings Account Calculator", "Levels and Badges"],
        },
        {
          heading: "Seedly App",
          tags: ["App Reviews", "FAQ", "Security"],
        },
      ],
    };
  }

  render() {
    return (
      <footer id="sticky-footer" className="text-white">
        <div className="p-4 bg-secondary">
          <div className="d-flex justify-content-around">
            {this.state.data.map((data, index) => (
              <div key={index} className="d-flex flex-column mb-3">
                <div className="p-1 font-weight-bold">{data.heading}</div>
                {data.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="p-1">
                    {tag}
                  </div>
                ))}
              </div>
            ))}
            <div className="d-flex flex-column mb-3">
              <div className="p-1 font-weight-bold">Download the app</div>
              <div className="p-1">
                <Image src={appstore} width={100} />
              </div>
              <div className="p-1">
                <Image src={playstore} width={100} />
              </div>
            </div>
          </div>
        </div>

        <FooterIcons />
      </footer>
    );
  }
}

export default Footer;
