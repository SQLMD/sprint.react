import React, { Component } from "react";
const _ = require("lodash");
import Upload from "./Upload";

import "../styles/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

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
