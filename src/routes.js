import React from "react";
import { Switch, Route } from "react-router-dom";
import Location from "./components/Location";

export default (
  <Switch>
    <Route exact path="/" component={Location} />
  </Switch>
);
