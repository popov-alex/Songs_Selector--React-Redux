import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./components/reducers";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
