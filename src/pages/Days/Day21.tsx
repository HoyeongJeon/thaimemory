import React from "react";
import IMG__2989 from "./pictures/day21/IMG_2989.mp4";
import IMG__2991 from "./pictures/day21/IMG_2991.mp4";
import IMG__2992 from "./pictures/day21/IMG_2992.mp4";
import IMG__2994 from "./pictures/day21/IMG_2994.mp4";
import IMG__2995 from "./pictures/day21/IMG_2995.mp4";
import IMG__3007 from "./pictures/day21/IMG_3007.jpg";
import IMG__3017 from "./pictures/day21/IMG_3017.jpg";
import IMG__3022 from "./pictures/day21/IMG_3022.jpg";
import IMG__3032 from "./pictures/day21/IMG_3032.jpg";
import IMG__3041 from "./pictures/day21/IMG_3041.jpg";
import "./Day15.css";

const Day21 = () => {
  return (
    <>
      <div className="DayContainer">
        <span>200321</span>
        <div className="DayContainer__box">
          <video src={IMG__2989} controls></video>
          <video src={IMG__2991} controls></video>
          <video src={IMG__2992} controls></video>
          <img src={IMG__3007}></img>
          <img src={IMG__3017}></img>
        </div>
        <div className="DayContainer__box">
          <video src={IMG__2994} controls></video>
          <img src={IMG__3022}></img>
          <img src={IMG__3032}></img>
          <img src={IMG__3041}></img>
          <video src={IMG__2995} controls></video>
        </div>
      </div>
    </>
  );
};

export default Day21;
