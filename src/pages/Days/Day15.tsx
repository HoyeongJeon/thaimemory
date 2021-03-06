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
import { Link } from "react-router-dom";
import "./Day15.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Day15 = () => {
  return (
    <>
      <div className="Barrier"></div>
      <div className="DayContainer">
        <span>200315</span>
        <div>
          <div className="DayContainer__box">
            <img src={waytoaiport} alt="day151"></img>
            <video src={aiport1} controls></video>
            <video src={airport2} controls></video>
            <img src={before1} alt="day152"></img>
            <img src={before2} alt="day153"></img>
            <img src={selfie} alt="day154"></img>
          </div>
          <div className="DayContainer__btn">
            <div className="goBack"></div>
            <Link to={"/thaimemory/day/16"}>
              <div className="goNext">
                <ChevronRightIcon />
              </div>
            </Link>
          </div>
          <div className="DayContainer__box">
            <img src={watpho1} alt="day155"></img>
            <img src={watpho2} alt="day156"></img>
            <img src={watpho3} alt="day157"></img>
            <img src={buddha} alt="day158"></img>
            <img src={bigfoot} alt="day159"></img>
            <img src={beers} alt="day1510"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day15;
