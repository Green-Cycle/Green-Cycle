import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const checkout = () => {
    if (cartItems.length === 0) {
      return;
    }
    toggleCart();
    navigate('/checkout');
  };
  return (
    <div className={`cart ${!isCartOpen ? 'cart__opened' : ''}`}>
      <div className='cart__container'>
        <button className='cart__close-button' onClick={toggleCart}>
          <img src='/assets/close.svg' alt='close icon' />
        </button>
        <h2>Carrinho</h2>
        <ul className='cart__list'>
          {cartItems.map((item) => (
            <li key={item._id} className='cart__item'>
              <img src={item.cover} alt={item.name} className='cart__image' />
              <div className='cart__text-content'>
                <p className='cart__name'>{item.name}</p>
                <p>{item.quantity} un</p>
              </div>
              <p className='cart__price'>R$ {item.price}</p>
              <button onClick={() => removeItemFromCart(item._id)}>
                <img src='/assets/trashIcon.svg' alt='trash icon' />
              </button>
            </li>
          ))}
        </ul>
        <div className='cart__payment'>
          <div className='cart__discount'>
            <input
              className='cart__input'
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
          <div className='card__checkout-content'>
            <div>
              Total:R$
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
            <button
              className={
                cartItems.length === 0
                  ? 'cart__checkout cart__checkout_inactive'
                  : 'cart__checkout'
              }
              onClick={checkout}
            >
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
