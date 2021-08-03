import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const numbers = [15, 16, 17, 18, 19, 20, 21, 22];
  // const handleClick = () => {
  //   console.log(id);
  // };
  return (
    <div className="Main">
      {numbers.map((day, id) => {
        return (
          <Link to={`day/${day}`}>
            <div
              key={day + id}
              onClick={() => {
                console.log(day);
              }}
            >
              {day}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Main;
