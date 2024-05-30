import { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addItemToCart = (item) => {
    setCartItems([...cartItems, { ...item }]);
    console.log('Item adicionado ao carrinho:', item);
  };

  const handleApplyDiscount = (code) => {
    console.log('Código do voucher:', code); // Verificar o valor de `code`
    // Verificar se o código do voucher é uma string
    if (typeof code === 'string') {
      // Remover espaços em branco extras
      const trimmedCode = code.trim();
      console.log('Código do voucher após trim:', trimmedCode); // Verificar o valor de `trimmedCode`
      // Verificar se o código do voucher é válido
      if (trimmedCode === 'TEST10') {
        // Aplicar um desconto de 10% aos itens do carrinho
        const updatedCartItems = cartItems.map((item) => ({
          ...item,
          price: item.price * 0.9, // Aplica um desconto de 10%
        }));
        setCartItems(updatedCartItems);
        // Limpar o campo de entrada do código do voucher
        setDiscountCode('');
      } else {
        // Se o código do voucher não for válido, mostrar uma mensagem de erro ou tratar de acordo com a sua lógica
        alert('Código de voucher inválido');
      }
    } else {
      // Se o código do voucher não for uma string, mostrar uma mensagem de erro
      alert('Código de voucher inválido');
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
