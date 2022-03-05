import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ProductsProvider } from "./Context/index";

ReactDOM.render(
  <>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </>,
  document.getElementById("root")
);
