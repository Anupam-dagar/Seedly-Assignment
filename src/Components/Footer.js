import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import appstore from "../assets/app-store.png";
import playstore from "../assets/google-play.png";

function Footer(props) {
  return (
    <footer id="sticky-footer" className="text-white">
      <div className="p-4 bg-secondary">
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column mb-3">
            <div className="p-1 font-weight-bold">Company</div>
            <div className="p-1">About</div>
            <div className="p-1">Contact</div>
            <div className="p-1">Careers</div>
            <div className="p-1">Privacy</div>
            <div className="p-1">Terms</div>
          </div>
          <div className="d-flex flex-column mb-3">
            <div className="p-1 font-weight-bold">Product Reviews</div>
            <div className="p-1">Credit Cards</div>
            <div className="p-1">Electricity Retailers</div>
            <div className="p-1">Mobile Plans</div>
            <div className="p-1">Online Brokerages</div>
            <div className="p-1">P2P Lending</div>
            <div className="p-1">Robo-Advisors</div>
            <div className="p-1">Savings Accounts</div>
            <div className="p-1">Travel Insurance</div>
          </div>
          <div className="d-flex flex-column mb-3">
            <div className="p-1 font-weight-bold">Quick Tools</div>
            <div className="p-1">Savings Account Calculator</div>
            <div className="p-1">Levels and Badges</div>
          </div>
          <div className="d-flex flex-column mb-3">
            <div className="p-1 font-weight-bold">Seedly App</div>
            <div className="p-1">App Reviews</div>
            <div className="p-1">FAQ</div>
            <div className="p-1">Security</div>
          </div>
          <div className="d-flex flex-column mb-3">
            <div className="p-1 font-weight-bold">Download the app</div>
            <div className="p-1">
              <Image src={ appstore } width={100} />
            </div>
            <div className="p-1"><Image src={playstore} width={100} /></div>
          </div>
        </div>
      </div>

      <div className="bg-dark">
        <div className="d-flex ml-4 p-4">
          <FontAwesomeIcon
            className="ml-4 mr-4"
            icon={["fab", "twitter"]}
            size="2x"
          />
          <FontAwesomeIcon
            className="ml-4 mr-4"
            icon={["fab", "instagram"]}
            size="2x"
          />
          <FontAwesomeIcon
            className="ml-4 mr-4"
            icon={["fab", "facebook"]}
            size="2x"
          />
          <FontAwesomeIcon
            className="ml-4 mr-4"
            icon={["fab", "telegram-plane"]}
            size="2x"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
