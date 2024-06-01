import { React, useState } from 'react';
import './Header.css';
import Cart from './Cart';
import Nav from './Nav';
import { searchProducts } from '../utils/api';

import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchFile, setSearchFile] = useState('');
  const [searchItems, setSearchItems] = useState([]);

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
    console.log(handleSearch);
    evt.preventDefault();
    try {
      const res = await searchProducts(searchFile);
      setSearchItems(res);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  return (
    <div className='header'>
      <div className='header__top'>
        <div className='header__search-container'>
          <form className='header__form' onSubmit={handleSearch}>
            <button type='submit' className='header__search'>
              <img
                src='/assets/searchIcon.svg'
                alt='search icon'
                className='search-icon'
              />
            </button>
            <input
              name='searchParams'
              type='text'
              value={searchFile}
              onChange={(e) => setSearchFile(e.target.value)}
              placeholder='O que deseja buscar?'
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
