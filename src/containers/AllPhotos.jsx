import React, { Component } from "react";
const { connect } = require("react-redux");
const _ = require("lodash");

import "../styles/styles.css";
class AllPhotos extends Component {
  render() {
    return (
      <div>
        {/* {this.props.photos.map((photo, index) => {
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
        })} */}
        <img
          className="image imageCell"
          src={`data:image/jpeg;base64, ${this.props.photos[0]}`}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
});

export default connect(mapStateToProps)(AllPhotos);
