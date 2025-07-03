import React from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='products/:id' element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
