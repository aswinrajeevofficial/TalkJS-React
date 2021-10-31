import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
import Home from "./Home";

ReactDOM.render(
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>,
  document.getElementById("root")
);
