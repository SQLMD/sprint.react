// This component is the main entry point for your React app.

// It is also responsible for rendering all of the other components:

//  Navbar, which renders the navigation bar for the user. The Navbar is always shown regardless of view and should not be rendered
//  Either AllPhotos or SinglePhoto, which renders either a grid of all photos or an enlarged version of just one single photo. This render is conditional, based on the currentView property of the App component's state
// App should default to showing the AllPhotos component.

// When App component mounts, the following should happen:

//  It should use the utility methods found in the utils/index.js file to make a call to Amazon's S3 service to retrieve a list of all items stored on the pre-specified S3 bucket
//  Then, it should grab each image from that list of items and store it into the photos array in the component's state
// No need to worry about calling the render method of this component whenever the photos array is updated -- React will detect changes in a component's state and props, then trigger the render method on its own if a change that would cause a visual difference has been detected.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

import "../styles/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: [],
      selectedPhoto: "",
    };
  }

  render() {
    return (
      <div className="app">
        Test
        <Navbar />
        <AllPhotos />
        <SinglePhoto />
      </div>
    );
  }
}
