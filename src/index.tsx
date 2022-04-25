import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ProductsProvider } from "./Context/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </>,
  document.getElementById("root")
);
