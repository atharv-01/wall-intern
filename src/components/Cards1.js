import React from "react";
import "./Cards1.css";
import Records from "./data1.json";
const Cards1 = () => {
  return (
    <div className="card1">
      Highlights
      <div className="upperCards">
        {Records &&
          Records.map((record) => {
            return (
              <div className="mainCard" key={record.id}>
                <div className="upperPart">
                  {/* Img */}
                  <img src={record.image} alt="xyz" className="image" />
                  {/* Frame 3773 */}
                  {/* Title  */}
                  <div className="frame3773">
                    <div className="title">{record.title}</div>
                    {/* Subtitle */}
                    <div className="subTitle">{record.subtitle}</div>
                  </div>
                </div>
                <div className="lowerPart">
                  <div className="namesHolder">
                    <div className="subHead">{record.subheading2}</div>
                    {/* SUbhead 2 */}

                    <div className="subHead2">{record.subheadingNum}</div>
                  </div>
                  <div className="namesHolder2">
                    {/* Time  */}
                    <div className="time">{record.month}</div>

                    {/* Points */}
                    <div className="points">{record.points}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards1;
