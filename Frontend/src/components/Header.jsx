import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Header.css';
import Cart from './Cart';
import Nav from './Nav';
import { searchProducts } from '../utils/api';

import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchFile, setSearchFile] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });

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

  const handleSearch = async (evt) => {
    evt.preventDefault();
    setSearchParams('q', searchFile);
    navigate(`/store?q=${searchFile}`);
    setSearchFile('');
  };

  return (
    <div className='header'>
      <div className='header__top'>
        <div className='header__search-container'>
          <form className='header__form' onSubmit={handleSearch}>
            <input
              name='searchParams'
              type='text'
              value={searchFile}
              onChange={(e) => setSearchFile(e.target.value)}
              placeholder='O que deseja buscar?'
            />
            <button type='submit' className='header__search'>
              <img
                src='/assets/searchIcon.svg'
                alt='search icon'
                className='search-icon'
              />
            </button>
          </form>
        </div>

        <h1 className='header__logo'>
          <Link to={'/'}>
            <img src='./assets/logo.svg' alt='logo' />
          </Link>
        </h1>
        <div className='header__icons'>
          {' '}
          <button onClick={toggleCart}>
            <img
              src='/assets/shoppingCart2.svg'
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
