const redux = require("redux");

const initialState = {
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: undefined,
};

const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    default:
      return {};
  }
};

const store = redux.createStore(reducer, initialState);

module.exports = {
  store,
};
