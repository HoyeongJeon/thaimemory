import React, { useRef, useState } from "react";
import starts from "./pictures/day18/starts.jpg";
import starth from "./pictures/day18/starth.jpg";
import siwon from "./pictures/day18/siwon.jpg";
import backs from "./pictures/day18/backs.jpg";
import arrive from "./pictures/day18/arrive.jpg";
import sibal from "./pictures/day18/sibal.jpg";
import muyaho from "./pictures/day18/muyaho.mp4";
import trip from "./pictures/day18/trip.mp4";
import sea from "./pictures/day18/sea.mp4";
import siiball from "./pictures/day18/siiball.mp4";

import "./Day15.css";

const Day18 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // videoRef.current?.addEventListener("mouseout", handleMouseOut);
  return (
    <>
      <div className="Barrier"></div>
      <div className="DayContainer">
        <span>200318</span>
        <div className="DayContainer__box">
          <img src={starts}></img>
          <img src={starth}></img>
          <video src={trip} ref={videoRef} controls></video>
          <img src={siwon}></img>
          <img src={backs}></img>
        </div>
        <div className="DayContainer__box">
          <video src={muyaho} ref={videoRef} controls></video>
          <video src={sea} ref={videoRef} controls></video>
          <img src={arrive}></img>
          <img src={sibal}></img>
          <video src={siiball} ref={videoRef} controls></video>
        </div>
      </div>
    </>
  );
};

export default Day18;
