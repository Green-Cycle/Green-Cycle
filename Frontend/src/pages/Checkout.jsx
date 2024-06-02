import { useCart } from '../contexts/CartContext';
import './Checkout.css';
function Checkout() {
  const { cartItems } = useCart();
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className='checkout__container'>
      {' '}
      <div className='checkout__wrapper'>
        <div className='checkout__adress'>
          <h2 className='checkout__title'>ENDEREÇO</h2>
          <form className='checkout__form'>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='rua'
                placeholder='Rua'
              />
            </div>
            <div className='checkout__fit'>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='number'
                  name='numero'
                  placeholder='Número'
                />
              </div>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='number'
                  name='cep'
                  wrapper
                  placeholder='CEP'
                />
              </div>
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='complemento'
                placeholder='Complemento'
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='cidade'
                placeholder='Cidade'
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='bairro'
                placeholder='Bairro'
              />
            </div>
          </form>
        </div>
        <div className='checkout__card'>
          <h2 className='checkout__title'>PAGAMENTO</h2>{' '}
          <form className='checkout__form'>
            <div className='checkout__input-'>
              <input
                className='checkout__input'
                type='number'
                name='numero do cartão'
                placeholder='Numero do cartão'
              />
            </div>
            <div className='checkout__fit'>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='text'
                  name='data'
                  placeholder='Validade (MM/AA)'
                />
              </div>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='number'
                  name='segurança'
                  placeholder='Código de segurança'
                />
              </div>
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='cardname'
                placeholder='Nome no cartão'
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='cidade'
                placeholder='Cidade'
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='bairro'
                placeholder='Bairro'
              />
            </div>
          </form>
        </div>
      </div>{' '}
      <div className='checkout__cart'>
        <h2 className='checkout__title'>Resumo da Compra</h2>
        <ul className='checkout__items'>
          {cartItems.map((item, index) => (
            <li key={index} className='checkout__item'>
              <img
                src={item.cover}
                alt={item.name}
                className='checkout__image'
              />
              <div className='checkout__details'>
                <span>{item.name}</span>
                <span>{item.quantity} un</span>
              </div>
              R${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className='checkout__total'>
          <h3>Subtotal: R${calculateTotal()}</h3>
          <h3>Frete: R${calculateTotal()}</h3>
          <h3>Cupom de desconto: R${calculateTotal()}</h3>
          <h3>Total: R${calculateTotal()}</h3>
        </div>
        <button className='checkout__button'>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default Checkout;
