import React from "react";
import Main from "../pages/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Day15 from "../pages/Days/Day15";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/day/:day">
          <Day15 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
