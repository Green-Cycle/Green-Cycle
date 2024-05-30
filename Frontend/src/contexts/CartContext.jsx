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
    console.log('Código do voucher:', discountCode); // Verificar o valor de `discountCode`
    // Verificar se o código do voucher é uma string
    if (typeof discountCode === 'string') {
      // Remover espaços em branco extras
      const trimmedCode = discountCode.trim();
      console.log('Código do voucher após trim:', trimmedCode); // Verificar o valor de `trimmedCode`
      // Verificar se o código do voucher é válido
      if (trimmedCode === 'TEST10') {
        // Aplicar um desconto de 10% aos itens do carrinho
        const updatedCartItems = cartItems.map((item) => ({
          ...item,
          price: (item.price * 0.9).toFixed(2), // Aplica um desconto de 10% e formata o preço para duas casas decimais
        }));
        setCartItems(updatedCartItems);
        setDiscountCode('');
        setDiscountMessage('Desconto aplicado com sucesso');
      } else {
        // Se o código do voucher não for válido, mostrar uma mensagem de erro ou tratar de acordo com a sua lógica
        setDiscountMessage('Código de desconto inválido ou expirado');
      }
    } else {
      // Se o código do voucher não for uma string, mostrar uma mensagem de erro
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
