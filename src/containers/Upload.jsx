import React, { Component } from "react";
import { saveObject } from "../utils/index";
import _ from "lodash";

import "../styles/upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.clickFileInput = this.clickFileInput.bind(this);
  }

  clickFileInput() {
    this.fileInput.current.click();
  }

  render() {
    return (
      <div className="file-upload">
        <button className="button" onClick={this.clickFileInput}>
          Upload a Picture
        </button>
        <input
          ref={this.fileInput}
          type="file"
          onChange={(e) => saveObject(e.target.files[0])}
        />
      </div>
    );
  }
}
