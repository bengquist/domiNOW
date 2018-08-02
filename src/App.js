import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
      </div>
    );
  }
}

export default App;
