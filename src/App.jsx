import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import VetAppointment from './pages/VetAppointment';
import Shop from './pages/Shop';
import Register from './pages/Register';
import CareTips from './pages/CareTips';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/vet-appointment" element={<VetAppointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop user={user} />} />
        <Route path="/care-tips" element={<CareTips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
