import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
// import AllPhotos from "./AllPhotos";
// import SinglePhoto from "./SinglePhoto";
//import { listObjects, getSingleObject, saveObject } from "../utils/index";

import "../styles/styles.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default connect()(App);
