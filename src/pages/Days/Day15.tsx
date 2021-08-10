import React, { useRef, useState } from "react";
import waytoaiport from "./pictures/day15/waytoaiport.jpg";
import before1 from "./pictures/day15/before1.jpg";
import before2 from "./pictures/day15/before2.jpg";
import selfie from "./pictures/day15/selfie.jpg";
import watpho1 from "./pictures/day15/watpho1.jpg";
import watpho2 from "./pictures/day15/watpho2.jpg";
import watpho3 from "./pictures/day15/watpho3.jpg";
import buddha from "./pictures/day15/buddha.jpg";
import bigfoot from "./pictures/day15/bigfoot.jpg";
import beers from "./pictures/day15/beers.jpg";
import aiport1 from "./pictures/day15/aiport1.mp4";
import airport2 from "./pictures/day15/airport2.mp4";

import "./Day15.css";

const Day15 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controls, setControls] = useState<boolean>(false);
  // videoRef.current?.addEventListener("mouseout", handleMouseOut);
  return (
    <>
      <div className="Barrier"></div>
      <div className="DayContainer">
        <span>200315</span>
        <div className="DayContainer__box">
          <img src={waytoaiport}></img>
          <video src={aiport1} ref={videoRef} controls></video>
          <video src={airport2} ref={videoRef} controls></video>
          <img src={before1}></img>
          <img src={before2}></img>
          <img src={selfie}></img>
        </div>
        <div className="DayContainer__box">
          <img src={watpho1}></img>
          <img src={watpho2}></img>
          <img src={watpho3}></img>
          <img src={buddha}></img>
          <img src={bigfoot}></img>
          <img src={beers}></img>
        </div>
      </div>
    </>
  );
};

export default Day15;
