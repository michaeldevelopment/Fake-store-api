import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/navigation";
import ClassComponent from "./Components/ClassComponent";

import { useDispatch } from "react-redux";

import { fetchProducts } from "./Store/actions";

import About from "./Pages/about";
import Home from "./Pages/home";
import ProductDetail from "./Pages/productDetail.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Router>
        <Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/class" element={<ClassComponent />} />
          </Routes>
        </Navigation>
      </Router>
    </>
  );
}

export default App;
