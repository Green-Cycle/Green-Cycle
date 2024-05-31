import { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountMessage, setDiscountMessage] = useState('');
  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const addItemToCart = (item) => {
    setCartItems([...cartItems, { ...item }]);
    console.log('Item adicionado ao carrinho:', item);
  };

  const handleApplyDiscount = () => {
    if (typeof discountCode === 'string') {
      const trimmedCode = discountCode.trim();

      if (trimmedCode === 'TEST10') {
        const updatedCartItems = cartItems.map((item) => ({
          ...item,
          price: (item.price * 0.9).toFixed(2),
        }));
        setCartItems(updatedCartItems);
        setDiscountCode('');
        setDiscountMessage('Desconto aplicado com sucesso');
      } else {
        setDiscountMessage('Código de desconto inválido ou expirado');
      }
    } else {
      setDiscountMessage('Código de desconto inválido ou expirado');
    }
  };
  const removeItemFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        removeItemFromCart,
        discountCode,
        handleApplyDiscount,
        setDiscountCode,
        toggleCart,
        addItemToCart,
        discountMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
