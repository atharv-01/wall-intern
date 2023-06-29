import React from "react";
import "./Cards2.css";
import Records from "./data2.json";
const Cards2 = () => {
  return (
    <div className="card2">
      {Records &&
        Records.map((record) => {
          return (
            <div className="box">
              <div className="upperPart">
                <img src={record.images} alt="hi" className="photo" />
                <div className="month">3 months</div>
              </div>

              <div className="lowerPart">
                {/* Heading */}
                <div className="heading">Azuki #9839</div>
                {/* Subheading */}
                <div className="subHeading">
                  <div className="subHeading1">Bought</div>
                  <div className="subHeading2">2.82</div>
                </div>
                {/* Floor */}
                <div className="downHeading">
                  <div className="downHeading1">Floor</div>
                  <div className="downHeading2">
                    <div className="amount1">12.74</div>
                    <div className="amount2">+21.6%</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards2;
