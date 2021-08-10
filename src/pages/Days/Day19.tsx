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

const Day19 = () => {
  return (
    <>
      <div className="DayContainer">
        <span>200319</span>
        <div className="DayContainer__box">
          <img src={tuktuk}></img>
          <img src={seung}></img>
          <img src={seung2}></img>
          <img src={bigbuddha}></img>
        </div>
        <div className="DayContainer__box">
          <img src={hoho}></img>
          <img src={hohoho}></img>
          <video src={soundofmusic} controls></video>
          <img src={meditation}></img>
        </div>
      </div>
    </>
  );
};

export default Day19;
