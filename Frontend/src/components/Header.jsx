import { React, useState } from 'react';
import './Header.css';
import Cart from './Cart';
import Nav from './Nav';

import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
        <div className='header__search-container'>
          <button className='header__search'>
            <img
              src='/assets/searchIcon.svg'
              alt='search icon'
              className='search-icon'
              onClick={() => {
                setOpenSearch(!openSearch);
              }}
            />
          </button>
          <form className='header__form'>
            <input
              name='searchParams'
              type='text'
              placeholder='What are you looking for?'
            />
          </form>
        </div>

        <h1>
          <Link to={'/'}>
            <img src='./assets/logo.svg' alt='logo' />
          </Link>
        </h1>
        <div className='header__icons'>
          {' '}
          <button onClick={toggleCart}>
            <img
              src='/assets/shopping_bag.svg'
              alt='account icon'
              className='account-icon'
            />
          </button>
          <button>
            <img
              src='/assets/accountIcon.svg'
              alt='account icon'
              className='account-icon'
            />
          </button>
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
