import React from "react";
import pic1 from "./pictures/day20/pic1.jpg";
import pic2 from "./pictures/day20/pic2.jpg";
import pic3 from "./pictures/day20/pic3.jpg";
import pic4 from "./pictures/day20/pic4.jpg";
import pic5 from "./pictures/day20/pic5.jpg";
import vid6 from "./pictures/day20/vid6.mp4";
import "./Day15.css";

const Day20 = () => {
  return (
    <>
      <div className="DayContainer">
        <span>200320</span>
        <div className="DayContainer__box">
          <img src={pic1}></img>
          <img src={pic2}></img>
          <img src={pic3}></img>
        </div>
        <div className="DayContainer__box">
          <img src={pic4}></img>
          <img src={pic5}></img>
          <video src={vid6} controls></video>
        </div>
      </div>
    </>
  );
};

export default Day20;
