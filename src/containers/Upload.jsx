import React from "react";
import { saveObject } from "../utils/index";
const { connect } = require("react-redux");

import "../styles/upload.css";

function Upload() {
  const fileInput = React.createRef();

  const clickFileInput = () => {
    fileInput.current.click();
  };

  return (
    <div className="file-upload">
      <button className="button" onClick={clickFileInput}>
        Upload a Picture
      </button>
      <input
        ref={fileInput}
        type="file"
        onChange={(e) => saveObject(e.target.files[0])}
      />
    </div>
  );
}

export default connect()(Upload);
