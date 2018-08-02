import React from "react";
import { Switch, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import Menu from "./components/Menu/Menu";
import Options from "./components/Options/Options";

export default (
  <Switch>
    <Route exact path="/" component={Location} />
    <Route path="/store/:apiKey" component={Menu} />
    <Route path="/options/:itemKey" component={Options} />
  </Switch>
);
