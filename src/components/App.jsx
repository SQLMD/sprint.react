import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

import "../styles/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: [],
      selectedPhoto: undefined,
    };
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  componentDidMount() {
    this.loadPhotos();
  }

  loadPhotos() {
    listObjects().then((photos) => {
      return Promise.all(
        photos.map((photo) => getSingleObject(photo["Key"]))
      ).then((photoStrings) => {
        this.setState({ photos: photoStrings });
      });
    });
  }

  onPhotoClick(selectedPhoto) {
    this.setState({
      currentView: "SinglePhoto",
      selectedPhoto,
    });
  }

  onTitleClick() {
    this.setState({
      currentView: "AllPhotos",
    });
    this.loadPhotos();
  }

  get currentView() {
    if (this.state.currentView === "AllPhotos") {
      return (
        <AllPhotos
          photos={this.state.photos}
          onPhotoClick={this.onPhotoClick}
        />
      );
    }
    if (this.state.currentView === "SinglePhoto") {
      return <SinglePhoto selectedPhoto={this.state.selectedPhoto} />;
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar onTitleClick={this.onTitleClick} />
        {this.currentView}
      </div>
    );
  }
}
