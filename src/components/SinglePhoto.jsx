import React from "react";
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

export default SinglePhoto;
