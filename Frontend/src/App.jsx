import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Store from './pages/Store';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <CartProvider>
        <Header setIsCartOpen={setIsCartOpen} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/store' element={<Store />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
