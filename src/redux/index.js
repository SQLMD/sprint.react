const redux = require("redux");

const initialState = {
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: undefined,
};

const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case "GO_HOME": {
      const newState = { currentView: "AllPhotos" };
      return newState;
    }
    default:
      return {};
  }
};

const store = redux.createStore(reducer, initialState);

module.exports = {
  store,
};
