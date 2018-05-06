import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

import "../styles/styles.css";

class App extends Component {
  get currentView() {
    if (this.props.currentView === "AllPhotos") {
      return <AllPhotos />;
    }
    if (this.props.currentView === "SinglePhoto") {
      return <SinglePhoto />;
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.currentView}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps)(App);
