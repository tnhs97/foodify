import "./main.css";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { browserHistory, Router, Route } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import Layout from "./components/Layout";
import Foods from "./components/Foods";
import Food from "./components/Food";
import Basket from "./components/Basket";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const jsx = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={Foods} />
        <Route path="/categories/:id" component={Foods} />
      </Route>
      <Route path="/Foods/:id" component={Food} />
      <Route path="/basket" component={Basket} />
    </Router>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
