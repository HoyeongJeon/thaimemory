import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
        <div>
          <div className="DayContainer__box">
            <img src={morning} alt="day161"></img>
            <img src={morning2} alt="day162"></img>
            <img src={street} alt="day163"></img>
            <img src={selfie} alt="day164"></img>
            <img src={shit} alt="day165"></img>
            <img src={mikol} alt="day166"></img>
          </div>

          <div className="DayContainer__btn">
            <Link to={"/thaimemory/day/15"}>
              <div className="goBack">
                <ChevronLeftIcon />
              </div>
            </Link>
            <Link to={"/thaimemory/day/17"}>
              <div className="goNext">
                <ChevronRightIcon />
              </div>
            </Link>
          </div>

          <div className="DayContainer__box">
            <img src={waqqu} alt="day167"></img>
            <img src={siam} alt="day168"></img>
            <img src={trash} alt="day169"></img>
            <img
              src={nightselfie}
              onClick={handleClick}
              className={isClicked ? "noclicked" : "clicked"}
              ref={() => picRef}
              alt="day1610"
            ></img>
            <img src={temple} alt="day1611"></img>
            <img src={lotti} alt="day1612"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day16;
