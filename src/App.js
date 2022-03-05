import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/navigation";
import ClassComponent from "./Components/ClassComponent";
import Study from "./Components/Study";

import About from "./Pages/about";
import Home from "./Pages/home";
import ProductDetail from "./Pages/productDetail.js";

import { fetchData } from "./utils/fetchData";

import { ProductsConsumer } from "./Context/index";

function App() {
  const { products, getProducts } = ProductsConsumer();

  useEffect(
    () => fetchData("https://fakestoreapi.com/products", getProducts),
    []
  );

  return (
    <>
      <Router>
        <Navigation>
          <Routes>
            <Route
              path="/"
              element={products && <Home products={products} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/detail/:id"
              element={<ProductDetail products={products} />}
            />
            <Route path="/class" element={<ClassComponent />} />
            <Route path="/study" element={<Study />} />
          </Routes>
        </Navigation>
      </Router>
    </>
  );
}

export default App;
