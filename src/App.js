import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";

import Navber from './Pages/Home/Shared/Navber/Navber';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Products from './Pages/Home/Home/Products/Products';
import Product from './Pages/Home/Home/Product/Product';


function App() {
  return (
    <div>
     <Router>
       <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/product" element={<Product></Product>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />              
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
