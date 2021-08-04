import { ClassNames } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const numbers = [15, 16, 17, 18, 19, 20, 21, 22];
  const thailand = ["T", "H", "A", "I", "L", "A", "N", "D"];
  // const handleClick = () => {
  //   console.log(id);
  // };
  return (
    <>
      <div className="Main__container">
        <div className="Main">
          {numbers.map((day, id) => {
            return (
              <Link to={`day/${day}`}>
                <div
                  className="Main__day"
                  key={day + id}
                  onClick={() => {
                    console.log(day);
                  }}
                >
                  {day}
                  <div>{thailand[id]}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
