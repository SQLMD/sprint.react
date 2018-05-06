import React, { Component } from "react";
import { connect } from "react-redux";

import Upload from "./Upload";
import { listObjects, getSingleObject } from "../utils/index";

import "../styles/navbar.css";

class Navbar extends Component {
  onTitleClick() {
    listObjects()
      .then((photos) => {
        return Promise.all(
          photos.map((photo) => getSingleObject(photo["Key"]))
        );
      })
      .then((photos) => {
        this.props.onTitleClick(photos);
      });
  }

  componentDidMount() {
    this.onTitleClick();
  }
  render() {
    return (
      <div className="navbar">
        <h4
          className="navbar-header"
          onClick={() => {
            this.onTitleClick();
          }}
        >
          CC Photos
        </h4>
        <Upload />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleClick: (photos) => dispatch({ type: "GO_HOME", photos }),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
