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
      return
    }
    toggleCart();
    navigate('/checkout')
  }
  return (
    <div className={`cart ${!isCartOpen ? 'cart__opened' : ''}`}>
      <div className='cart__container'>
        <h2>Carrinho</h2>
        <button className='cart__close-button' onClick={toggleCart}>
          <img src='./assets/close.svg' alt='close icon' />
        </button>
        <ul style={{width: '90%', overflowY:"auto"}}>
          {cartItems.map((item) => (
            <li key={item._id} style={{width: '100%', display: 'grid', gridTemplateColumns: '1fr 4fr 1fr 1fr 1fr'}}>
              <img src={item.cover} alt={item.name} className='cart__image' />
                <p style={{textAlign: 'left'}}>{item.name}</p>
                <p>{item.quantity}</p>
                <p>R$ {item.price}</p>
              <button onClick={() => removeItemFromCart(item._id)}>
                <img src='/assets/trashIcon.svg' alt='trash icon' />
              </button>
            </li>
          ))}
          <div style={{textAlign: 'right', marginRight:'1rem', marginTop: '1rem', fontWeight: 'bold'}}>
            Total:R$
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
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
        <button className={cartItems.length===0 ? 'cart__checkout cart__checkout_inactive' : 'cart__checkout'} onClick={checkout}>
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
}

export default Cart;
