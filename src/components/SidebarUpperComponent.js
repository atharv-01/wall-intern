import React from "react";
import "./SidebarUpperComponent.css";
import testSvg from "../assets/Ellipse.svg";
const SideUpperComponent = () => {
  return (
    <div className="sidebarUpper">
      <img className="sidebarUpperArc" src={testSvg} alt="Xyx" />
      <img
        className="sidebarUpperImg"
        src="https://s3-alpha-sig.figma.com/img/4335/7ffc/431d73129a1c5c6acd4d0dfd5d1d72f2?Expires=1687737600&Signature=Wq4EwSu2Q6qomWggljr-4MPVoQFeBZoHiezzunD20qDkfSchjeV8x4V04nXxAfbu4ACPElh0bObzgE7Nfi5niaiyZh4xXiiks67iqcMk3IIFIWMy8aEaAGHbp7I-3zsCJBSydrMZwgcKYU~5Mx7RJ8r07WIare6o61nbjtNRFCi0BAN6Mmcezhw6eqwHfr8zACBuzhfEcdc-phyGSC08G7e~oFlXDHfnuHYbr~QixRIZ0CBaua7nE0fZfNMaxX2b6qZwPlY5-Ww5RRLxJ9ZQznjNz93xsvB-GEpoohYV0n6Z6lfZ-Hz9u9HvVs0X5fzTX5gPJgx-ze5dl-x8CWk~3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Bg Img"
      />

      <div className="sideUpperHeading">dingaling.eth</div>

      <div className="sideUpperSubHeading">0xadgf....jkld</div>

      <div className="lvl2">LVL 2</div>
    </div>
  );
};

export default SideUpperComponent;
