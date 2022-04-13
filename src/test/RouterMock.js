import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const history = createBrowserHistory();

const RouterMock = (props) => (
  <Router history={history}>{props.children}</Router>
);

export default RouterMock;
