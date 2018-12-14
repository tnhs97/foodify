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
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { configureFakeBackend } from './helpers';
// const store = configureStore();

configureFakeBackend();

const history = syncHistoryWithStore(browserHistory, configureStore);
const jsx = (
  <Provider store={configureStore}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={Foods} />
        <Route path="/categories/:id" component={Foods} />
      </Route>
      <Route path="/Foods/:id" component={Food} />
      <Route path="/basket" component={Basket} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
