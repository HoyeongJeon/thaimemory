import React from "react";
import tuktuk from "./pictures/day19/tuktuk.jpg";
import seung from "./pictures/day19/seung.jpg";
import seung2 from "./pictures/day19/seung2.jpg";
import bigbuddha from "./pictures/day19/bigbuddha.jpg";
import hoho from "./pictures/day19/hoho.jpg";
import hohoho from "./pictures/day19/hohoho.jpg";
import meditation from "./pictures/day19/meditation.jpg";
import soundofmusic from "./pictures/day19/soundofmusic.mp4";
import "./Day15.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

const Day19 = () => {
  return (
    <>
      <div className="DayContainer">
        <span>200319</span>
        <div>
          <div className="DayContainer__box">
            <img src={tuktuk}></img>
            <img src={seung}></img>
            <img src={seung2}></img>
            <img src={bigbuddha}></img>
          </div>
          <div className="DayContainer__btn">
            <Link to={"/thaimemory/day/18"}>
              <div className="goBack">
                <ChevronLeftIcon />
              </div>
            </Link>
            <Link to={"/thaimemory/day/20"}>
              <div className="goNext">
                <ChevronRightIcon />
              </div>
            </Link>
          </div>
          <div className="DayContainer__box">
            <img src={hoho}></img>
            <img src={hohoho}></img>
            <video src={soundofmusic} controls></video>
            <img src={meditation}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day19;
