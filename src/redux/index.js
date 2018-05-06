const redux = require("redux");
const { listObjects, getSingleObject } = require("../utils/index");

const initialState = {
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: undefined,
};

const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case "LOAD_PHOTOS": {
      console.log(previousState);
      const newState = {
        currentView: "AllPhotos",
        photos: action.photos,
        selectedPhoto: previousState.selectedPhoto,
      };
      console.log(newState);
      return newState;
    }
    case "GO_HOME": {
      const newState = {
        currentView: "AllPhotos",
        photos: previousState.photos,
        selectedPhoto: previousState.selectedPhoto,
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
