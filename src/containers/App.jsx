import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
// import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

import "../styles/styles.css";

class App extends Component {
  componentDidMount() {
    listObjects()
      .then((photos) => {
        return Promise.all(
          photos.map((photo) => getSingleObject(photo["Key"]))
        );
      })
      .then((photos) => {
        this.props.loadPhotos(photos);
      });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <AllPhotos />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPhotos: (photos) => dispatch({ type: "LOAD_PHOTOS", photos }),
  };
};

export default connect(null, mapDispatchToProps)(App);
