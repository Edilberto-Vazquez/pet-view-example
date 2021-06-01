import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import VistaMascota from "./containers/VistaMascota";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <VistaMascota />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
