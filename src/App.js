import React, { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./Components/Navigation";
import ClassComponent from "./Components/ClassComponent";
import Study from "./Components/Study";

import About from "./Pages/about";
import Home from "./Pages/home";
import ProductDetail from "./Pages/productDetail.js";

import { fetchData } from "./utils/fetchData";

import { ProductsConsumer } from "./Context/index";

import { AnimatePresence } from "framer-motion";

function App() {
  const { products, getProducts } = ProductsConsumer();

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products", getProducts);
  }, []);

  const location = useLocation();

  return (
    <>
      <Navigation>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={products && <Home products={products} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/detail/:id"
              element={
                products.length ? <ProductDetail products={products} /> : null
              }
            />
            <Route path="/class" element={<ClassComponent />} />
            <Route path="/study" element={<Study />} />
          </Routes>
        </AnimatePresence>
      </Navigation>
    </>
  );
}

export default App;
