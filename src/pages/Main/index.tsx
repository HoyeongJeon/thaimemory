import React from "react";
import "./Main.css";

const Main = () => {
  const numbers = [15, 16, 17, 18, 19, 20, 21, 22];
  return (
    <div className="Main">
      {numbers.map((day) => {
        return (
          <div className="">
            <span>{day} </span>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
