import React from "react";
import "./TwitterBar.css";
import twittersvg from "../assets/Vector.svg";
import earthLogo from "../assets/earth.svg";
const TwittterBar = () => {
  return (
    <div className="twitter">
      <div className="twitterDesc">
        <img className="twitterLogo" src={twittersvg} alt="Xyx" />

        <div className="twitterTitle">@dingalingts</div>
      </div>

      <img className="earthLogos" src={earthLogo} alt="Xyx"></img>
    </div>
  );
};

export default TwittterBar;
