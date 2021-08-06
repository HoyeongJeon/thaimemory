import React, { useState, useRef } from "react";
import morning from "./pictures/day16/morning.jpg";
import morning2 from "./pictures/day16/morning2.jpg";
import street from "./pictures/day16/street.jpg";
import selfie from "./pictures/day16/selfie.jpg";
import shit from "./pictures/day16/shit.jpg";
import mikol from "./pictures/day16/mikol.jpg";
import waqqu from "./pictures/day16/waqqu.jpg";
import siam from "./pictures/day16/siam.jpg";
import trash from "./pictures/day16/trash.jpg";
import nightselfie from "./pictures/day16/nightselfie.jpg";
import popup from "./pictures/day16/popup.jpg";
import temple from "./pictures/day16/temple.jpg";
import lotti from "./pictures/day16/lotti.jpg";
// import aiport1 from "./pictures/Day15/aiport1.mp4";
import "./Day15.css";

const Day16 = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const picRef = useRef(null);
  const handleClick = (e: any) => {
    e.preventDefault();
    // const picRef = useRef(null);
    setIsClicked(!isClicked);
    if (isClicked == true) {
      e.target.classList.add("hello");
    }
    console.log(isClicked);
  };
  return (
    <>
      <div className="DayContainer">
        <span>190316</span>
        <div
          onClick={handleClick}
          className={isClicked ? "clickedBox" : "clickedBox noshow"}
        >
          <img className="clickedBox__pic" src={popup}></img>
        </div>
        <div className="DayContainer__box">
          <img src={morning}></img>
          <img src={morning2}></img>
          <img src={street}></img>
          <img src={selfie}></img>
          <img src={shit}></img>
          <img src={mikol}></img>
        </div>
        <div className="DayContainer__box">
          <img src={waqqu}></img>
          <img src={siam}></img>
          <img src={trash}></img>
          <img
            src={nightselfie}
            onClick={handleClick}
            className={isClicked ? "noclicked" : "clicked"}
            ref={() => picRef}
          ></img>
          <img src={temple}></img>
          <img src={lotti} />
        </div>
      </div>
    </>
  );
};

export default Day16;
