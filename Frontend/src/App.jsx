import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Store from './pages/Store';
import Maps from './pages/Maps';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import { AuthProvider } from './contexts/AuthContext';
import Sobre from './pages/Sobre';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/store' element={<Store />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/maps' element={<Maps />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
