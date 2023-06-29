import React from "react";
import "./Bottombar.css";
import chervrolet from "../assets/Chevron.svg";
const Bottombar = () => {
  return (
    <div className="bottombar">
      <div className="bottomBarCaption">
        <div className="subscribe">Subscribe</div>

        <img src={chervrolet} alt="" className="chevrolet" />
      </div>
    </div>
  );
};

export default Bottombar;
