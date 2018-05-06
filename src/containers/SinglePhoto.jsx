import React from "react";
const { connect } = require("react-redux");

import "../styles/styles.css";

function SinglePhoto(props) {
  return (
    <div>
      <img
        className="single-photo"
        src={`data:image/jpeg;base64, ${props.selectedPhoto}`}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedPhoto: state.selectedPhoto,
});

export default connect(mapStateToProps)(SinglePhoto);
