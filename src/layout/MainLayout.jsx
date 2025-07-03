import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { CartContextProvider } from '../context/CartContext.jsx';

const MainLayout = () => {
  return (
    <CartContextProvider>
      <div>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartContextProvider>
  )
}

export default MainLayout
