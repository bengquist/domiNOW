import React from "react";
import { Switch, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import Menu from "./components/Menu/Menu";

export default (
  <Switch>
    <Route exact path="/" component={Location} />
    <Route path="/store/:apiKey" component={Menu} />
  </Switch>
);
