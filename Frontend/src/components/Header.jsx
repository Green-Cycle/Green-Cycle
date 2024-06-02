import { useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import Cart from './Cart';
import Nav from './Nav';

import { useAuth } from '../contexts/AuthContext';
import Search from './Search';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const {
    cartItems,
    removeItemFromCart,
    discountCode,
    handleApplyDiscount,
    setDiscountCode,

    addItemToCart,
  } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <div className='header'>
      <div className='header__top'>
        <h1 className='header__logo'>
          <Link to={'/'}>
            <img src='./assets/logo.svg' alt='logo' />
          </Link>
        </h1>
        <Search />
        <div className='header__icons'>
          {' '}
          {!isLoginPage && !isRegisterPage && isLoggedIn && (
            <>
              {' '}
              <button onClick={toggleCart}>
                <img
                  src='/assets/shopping_bag.svg'
                  alt='account icon'
                  className='account-icon'
                />
              </button>
              <button onClick={logout}>
                <img
                  src='/assets/accountIcon.svg'
                  alt='account icon'
                  className='account-icon'
                />
              </button>
              {/* <span>Olá, {user?.name}</span>
              <button onClick={logout}>LOGOUT</button> */}
            </>
          )}
          {!isLoggedIn && !isLoginPage && !isRegisterPage && (
            <div className='header__login-box'>
              <Link className='header__login-button' to={'/login'}>
                LOGIN
              </Link>
              <span>
                {' '}
                ou cadastre-se <Link to={'/register'}>aqui</Link>
              </span>
            </div>
          )}
          <button onClick={toggleMenu}>
            <img
              src='/assets/menu.svg'
              alt='menu icon'
              className='account-icon header__hamburguer'
            />
          </button>
        </div>
      </div>
      <Nav />
      <div className={menuOpen ? 'header__menu_open' : 'header__menu'}>
        <Search menuOpen={menuOpen} />
        <Nav menuOpen={menuOpen} />
      </div>{' '}
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          discountCode={discountCode}
          setDiscountCode={setDiscountCode}
          handleApplyDiscount={handleApplyDiscount}
          toggleCart={toggleCart}
        />
      )}
      <div className='header__line' />
    </div>
  );
}

export default Header;
