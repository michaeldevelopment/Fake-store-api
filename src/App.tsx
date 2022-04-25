/* eslint-disable */
import { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./Components/Navigation";
import ClassComponent from "./Components/ClassComponent";

import About from "./Pages/about";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";

import fetchData from "./utils/fetchData";

import { useSelector, useDispatch } from "./Context/index";

import { AnimatePresence } from "framer-motion";
import { loadProducts } from "./store/actions";

import { productsTypeFetch } from "./types";

function App() {
  const state = useSelector();
  const { products }: { products: productsTypeFetch } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then((data) => dispatch(loadProducts(data)));
  }, []);

  const location = useLocation();

  return (
    <>
      <Navigation>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={products.length && <Home products={products} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/detail/:id"
              element={
                products.length ? <ProductDetail products={products} /> : null
              }
            />
            <Route path="/class" element={<ClassComponent />} />
          </Routes>
        </AnimatePresence>
      </Navigation>
    </>
  );
}

export default App;
