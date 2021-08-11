import React from "react";
import morning from "./pictures/day17/morning.jpg";
import galbi from "./pictures/day17/galbi.jpg";
import selfie from "./pictures/day17/selfie.jpg";
import shit1 from "./pictures/day17/shit1.jpg";
import shit2 from "./pictures/day17/shit2.jpg";
import ganzi from "./pictures/day17/ganzi.jpg";
import food from "./pictures/day17/food.jpg";
import inbus from "./pictures/day17/inbus.jpg";
import hororok from "./pictures/day17/hororok.mp4";
import bus from "./pictures/day17/bus.mp4";
import "./Day15.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

const Day17 = () => {
  return (
    <>
      <div className="DayContainer">
        <span>200317</span>
        <div>
          <div className="DayContainer__box">
            <img src={morning}></img>
            <img src={galbi}></img>
            <img src={selfie}></img>
            <img src={shit1}></img>
            <video src={hororok} controls></video>
          </div>

          <div className="DayContainer__btn">
            <Link to={"/thaimemory/day/16"}>
              <div className="goBack">
                <ChevronLeftIcon />
              </div>
            </Link>
            <Link to={"/thaimemory/day/18"}>
              <div className="goNext">
                <ChevronRightIcon />
              </div>
            </Link>
          </div>

          <div className="DayContainer__box">
            <img src={shit2}></img>
            <img src={ganzi}></img>
            <img src={food}></img>
            <img src={inbus}></img>
            <video src={bus} controls></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day17;
