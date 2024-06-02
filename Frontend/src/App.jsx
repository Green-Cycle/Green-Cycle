import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Store from './pages/Store';
import Maps from './pages/Maps';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Header setIsCartOpen={setIsCartOpen} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/store' element={<Store />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/maps' element={<Maps />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
