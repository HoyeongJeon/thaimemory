import React from "react";
import IMG__3048 from "./pictures/day22/IMG_3048.mp4";
import IMG__3047 from "./pictures/day22/IMG_3047.mp4";
import IMG__3046 from "./pictures/day22/IMG_3046.jpg";
import IMG__3053 from "./pictures/day22/IMG_3053.jpg";
import IMG__3054 from "./pictures/day22/IMG_3054.jpg";
import IMG__3055 from "./pictures/day22/IMG_3055.jpg";
import "./Day15.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

const Day22 = () => {
  return (
    <>
      <div className="DayContainer">
        <span>200322</span>
        <div>
          <div className="DayContainer__box">
            <img src={IMG__3046}></img>
            <video src={IMG__3047} controls></video>
            <video src={IMG__3048} controls></video>
          </div>
          <div className="DayContainer__btn">
            <Link to={"/thaimemory/day/21"}>
              <div className="goBack">
                <ChevronLeftIcon />
              </div>
            </Link>

            <div className="goNext"></div>
          </div>

          <div className="DayContainer__box">
            <img src={IMG__3053}></img>
            <img src={IMG__3054}></img>
            <img src={IMG__3055}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day22;
