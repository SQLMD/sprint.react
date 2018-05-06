import React, { Component } from "react";
const { connect } = require("react-redux");

import "../styles/styles.css";
class AllPhotos extends Component {
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

const mapStateToProps = (state) => ({
  photos: state.photos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onPhotoClick: (photo) => dispatch({ type: "PHOTO_CLICK", photo }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos);
