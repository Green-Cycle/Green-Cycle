import React from 'react';
import './Cart.css';
function Cart({
  cartItems,
  removeItemFromCart,
  discountCode,
  handleApplyDiscount,
  setDiscountCode,
  isCartOpen,
}) {
  return (
    <div>
      <div className='cart__container'>
        {' '}
        <h2>Carrinho</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(index)}>Remover</button>
            </li>
          ))}
        </ul>
        <input
          type='text'
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder='Código de desconto'
        />
        <button onClick={handleApplyDiscount}>Aplicar Desconto</button>
        <div>
          Total: $
          {cartItems.reduce((total, item) => total + parseFloat(item.price), 0)}
        </div>
      </div>
    </div>
  );
}

export default Cart;
