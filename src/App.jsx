import React from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Product />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
