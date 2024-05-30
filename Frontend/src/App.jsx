import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Store from './pages/Store';
import Maps from './pages/Maps';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <CartProvider>
        <Header setIsCartOpen={setIsCartOpen} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/store' element={<Store />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
