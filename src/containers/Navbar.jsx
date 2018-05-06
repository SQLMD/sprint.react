import React, { Component } from "react";
import { connect } from "react-redux";
const _ = require("lodash");
import Upload from "./Upload";

import "../styles/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h4
          className="navbar-header"
          onClick={() => {
            this.props.onTitleClick();
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
    onTitleClick: () => dispatch({ type: "GO_HOME" }),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
