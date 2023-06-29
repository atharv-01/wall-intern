import React from "react";
import "./Sidebar.css";
import SidebarUpperComponent from "./SidebarUpperComponent";
import TwittterBar from "./TwittterBar";
import CommonCommunity from "./CommonCommunity";
import Utility from "./Utility";
import Bottombar from "./Bottombar";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarUpperComponent />
      <TwittterBar />
      <p className="paragraph">
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner
        of 📦 @nftboxes
      </p>

      <CommonCommunity />
      <Utility />
      <Bottombar />
    </div>
  );
};

export default Sidebar;
