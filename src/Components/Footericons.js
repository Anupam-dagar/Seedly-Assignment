import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// FooterIcons Component
function FooterIcons() {
  return (
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
  );
}

export default FooterIcons;
