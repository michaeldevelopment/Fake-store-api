import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import ClassComponent from "./components/ClassComponent";

import { useDispatch } from "react-redux";

import { fetchProducts } from "./Store/actions";

import About from "./pages/about";
import Home from "./pages/home";
import ProductDetail from "./pages/productDetail.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Router>
        <NavigationBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/class" element={<ClassComponent />} />
          </Routes>
        </NavigationBar>
      </Router>
    </>
  );
}

export default App;
