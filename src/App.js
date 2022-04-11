import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/navigation";
import ClassComponent from "./Components/ClassComponent";
import Study from "./Components/Study";

import About from "./Pages/About";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail.js";

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
      <Navigation>
        <Routes>
          <Route path="/" element={products && <Home products={products} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/detail/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="/class" element={<ClassComponent />} />
          <Route path="/study" element={<Study />} />
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
