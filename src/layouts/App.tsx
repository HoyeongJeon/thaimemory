import React from "react";
import Main from "../pages/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Day15 from "../pages/Days/Day15";
import Day16 from "../pages/Days/Day16";
import Day17 from "../pages/Days/Day17";
import Day18 from "../pages/Days/Day18";
import Day19 from "../pages/Days/Day19";
import Day20 from "../pages/Days/Day20";
import Day21 from "../pages/Days/Day21";
import Day22 from "../pages/Days/Day22";
import background from "./background/background.jpg";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
          <img className="backgroundImg" src={background} />
          <p>
            "인생에서 비행기를 타고 하늘로 올라가는 몇 초보다 더 해방감을 주는
            시간은 찾아보기 힘들다." - 알랭 드 보통
          </p>
        </Route>
        <Route path="/day/15">
          <Day15 />
        </Route>
        <Route path="/day/16">
          <Day16 />
        </Route>
        <Route path="/day/17">
          <Day17 />
        </Route>
        <Route path="/day/18">
          <Day18 />
        </Route>
        <Route path="/day/19">
          <Day19 />
        </Route>
        <Route path="/day/20">
          <Day20 />
        </Route>
        <Route path="/day/21">
          <Day21 />
        </Route>
        <Route path="/day/22">
          <Day22 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
