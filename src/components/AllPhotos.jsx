import React, { Component } from "react";
const _ = require("lodash");

import "../styles/styles.css";

export default class AllPhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.photos.map((photo, index) => {
          return (
            <img
              key={index}
              className="image imageCell"
              src={`data:image/jpeg;base64, ${photo}`}
              onClick={() => {
                this.props.onPhotoClick(photo);
              }}
            />
          );
        })}
      </div>
    );
  }
}
