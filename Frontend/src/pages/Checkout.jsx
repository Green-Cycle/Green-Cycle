import { useCart } from '../contexts/CartContext';
import './Checkout.css';
import InfoToolTip from '../components/InfoToolTip';
import { useState } from 'react';
function Checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, discountCode } = useCart();

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const ship = 20;
    const total = subtotal + ship;
    return total.toFixed(2);
  };

  function openPopup() {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/';
    }, 3000);
  }
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
              R${parseFloat(item.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className='checkout__total'>
          <div className='checkout__total-items'>
            <h3 className='checkout__subtitle'>Cupom de desconto:</h3>
            <span>{discountCode ? 0 : '10%'}</span>
          </div>
          <div className='checkout__total-items'>
            <h3 className='checkout__subtitle'>Subtotal: </h3>{' '}
            <span>R${calculateSubtotal()}</span>
          </div>

          <div className='checkout__total-items'>
            {' '}
            <h3 className='checkout__subtitle'>Frete: </h3>
            <span>R$20,00</span>
          </div>
          <div className='checkout__total-item'>
            <h3>Total: </h3> <span>R${calculateTotal()}</span>
          </div>
        </div>
        <button className='checkout__button' onClick={openPopup}>
          Finalizar Compra
        </button>
        {isOpen && (
          <InfoToolTip
            isOpen={isOpen}
            message={'Compra realizada com sucesso'}
          />
        )}
      </div>
    </div>
  );
}

export default Checkout;
