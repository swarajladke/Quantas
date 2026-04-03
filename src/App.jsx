import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import ProductDetailPage from './pages/ProductDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/cart/CartDrawer'
import { Toaster } from 'react-hot-toast'
import SmoothScroll from './components/common/SmoothScroll'

function App() {
  const location = useLocation()
  
  const hideLayoutConfig = ['/login', '/register', '/admin']
  const hideLayout = hideLayoutConfig.some(path => location.pathname.startsWith(path))

  return (
    <CartProvider>
      <SmoothScroll />
      <div className="min-h-screen flex flex-col font-body text-dark">
        {!hideLayout && <Navbar />}
        <main className="flex-1 bg-surface z-0 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<div className="p-20 text-center font-heading font-bold text-3xl">Admin Panel Placeholder</div>} />
          </Routes>
        </main>
        {!hideLayout && <Footer />}
      </div>
      <CartDrawer />
      <Toaster position="bottom-right" />
    </CartProvider>
  )
}

export default App
