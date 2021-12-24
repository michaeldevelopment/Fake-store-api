import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/navigation';

import About from './Pages/about';
import Home from './Pages/home';
import ProductDetail from './Pages/productDetail.js';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home data={data} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail/:id" element={<ProductDetail data={data}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
