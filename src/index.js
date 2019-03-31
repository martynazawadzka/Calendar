import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";

import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
