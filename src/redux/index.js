const redux = require("redux");
const { listObjects, getSingleObject } = require("../utils/index");

const initialState = {
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: undefined,
};

const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case "GO_HOME": {
      const newState = {
        currentView: "AllPhotos",
        photos: action.photos,
        selectedPhoto: previousState.selectedPhoto,
      };
      return newState;
    }
    case "PHOTO_CLICK": {
      const newState = {
        currentView: "SinglePhoto",
        photos: previousState.photos,
        selectedPhoto: action.photo,
      };
      return newState;
    }
    default:
      return previousState;
  }
};

const store = redux.createStore(reducer);

module.exports = {
  store,
};
