// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// import styles from "./styles/styles.css";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./containers/App";

import styles from "./styles/styles.css";

const { store } = require("./redux/index");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
