import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
function Cart({
  cartItems,
  removeItemFromCart,
  discountCode,
  handleApplyDiscount,
  setDiscountCode,
  isCartOpen,
  toggleCart,
  discountMessage,
}) {
  return (
    <div className={`cart ${!isCartOpen ? 'cart__opened' : ''}`}>
      <div className='cart__container'>
        <button className='cart__close-button' onClick={toggleCart}>
          <img src='./assets/close.svg' alt='close icon' />
        </button>{' '}
        <h2>Carrinho</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.cover} alt={item.name} className='cart__image' /> -{' '}
              <span> {item.quantity}un</span>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(index)}>
                <img src='./assets/trashIcon.svg' alt='trash icon' />
              </button>
            </li>
          ))}
        </ul>
        <div className='cart__discount'>
          <input
            type='text'
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder='Código de desconto'
          />
          <button
            onClick={handleApplyDiscount}
            className='cart__discount-button'
          >
            Aplicar Desconto
          </button>
          <p>{discountMessage}</p>
        </div>
        <div>
          Total:R$
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </div>
        <Link className='cart__checkout' to={'/checkout'}>
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}

export default Cart;
