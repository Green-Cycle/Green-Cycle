import { useCart } from '../contexts/CartContext';
import './Checkout.css';
import InfoToolTip from '../components/InfoToolTip';
import { useState } from 'react';
function Checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, discountCode } = useCart();

  const [formData, setFormData] = useState({
    rua: '',
    numero: '',
    cep: '',
    complemento: '',
    cidade: '',
    bairro: '',
    numeroCartao: '',
    dataValidade: '',
    codigoSeguranca: '',
    nomeCartao: '',
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  return (
    <div className='checkout__container'>
      {' '}
      <div className='checkout__wrapper'>
        <div className='checkout__adress'>
          <h2 className='checkout__title'>ENDEREÇO DE ENTREGA</h2>
          <form className='checkout__form'>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='rua'
                placeholder='Rua'
                value={formData.rua}
                onChange={handleInputChange}
                minLength={3}
                maxLength={70}
              />
            </div>
            <div className='checkout__fit'>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='number'
                  name='numero'
                  placeholder='Número'
                  value={formData.numero}
                  onChange={handleInputChange}
                />
              </div>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='number'
                  name='cep'
                  wrapper
                  placeholder='CEP'
                  value={formData.cep}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='complemento'
                placeholder='Complemento'
                value={formData.complemento}
                onChange={handleInputChange}
                minLength={1}
                maxLength={10}
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='cidade'
                placeholder='Cidade'
                value={formData.cidade}
                onChange={handleInputChange}
                minLength={1}
                maxLength={30}
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='bairro'
                placeholder='Bairro'
                value={formData.bairro}
                onChange={handleInputChange}
                minLength={1}
                maxLength={30}
              />
            </div>
          </form>
          <div className='checkout__save'>
            <input
              type='checkbox'
              id='saveAddress'
              name='saveAddress'
              value='saveAddress'
            />
            <label htmlFor='saveAddress'>
              Salvar endereço para próximas compras
            </label>
          </div>
        </div>
        <div className='checkout__card'>
          <h2 className='checkout__title'>PAGAMENTO</h2>{' '}
          <form className='checkout__form'>
            <div className='checkout__input-'>
              <input
                className='checkout__input'
                type='number'
                name='numeroCartao'
                placeholder='Numero do cartão'
                value={formData.numeroCartao}
                onChange={handleInputChange}
              />
            </div>
            <div className='checkout__fit'>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='text'
                  name='dataValidade'
                  placeholder='Validade (MM/AA)'
                  value={formData.dataValidade}
                  onChange={handleInputChange}
                  minLength={4}
                  maxLength={4}
                />
              </div>
              <div className='checkout__input-wrapper'>
                <input
                  className='checkout__input'
                  type='number'
                  name='codigoSeguranca'
                  placeholder='Código de segurança'
                  value={formData.codigoSeguranca}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='nomeCartao'
                placeholder='Nome no cartão'
                value={formData.nomeCartao}
                onChange={handleInputChange}
                minLength={2}
                maxLength={50}
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='cidade'
                placeholder='Cidade'
                value={formData.cidade}
                onChange={handleInputChange}
                minLength={1}
                maxLength={30}
              />
            </div>
            <div className='checkout__input-wrapper'>
              <input
                className='checkout__input'
                type='text'
                name='bairro'
                placeholder='Bairro'
                value={formData.bairro}
                onChange={handleInputChange}
                minLength={1}
                maxLength={30}
              />
            </div>
          </form>
          <div className='checkout__save'>
            <input
              type='checkbox'
              id='saveCard'
              name='saveCard'
              value='saveCard'
            />
            <label htmlFor='saveCard'>
              Salvar dados de pagamento para próximas compras
            </label>
          </div>
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
              R$ {parseFloat(item.price).toFixed(2)}
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
            <span>R$ {calculateSubtotal()}</span>
          </div>

          <div className='checkout__total-items'>
            {' '}
            <h3 className='checkout__subtitle'>Frete: </h3>
            <span>R$ 20,00</span>
          </div>
          <div className='checkout__total-item'>
            <h3>Total: </h3> <span>R$ {calculateTotal()}</span>
          </div>
        </div>
        <button
          className='checkout__button'
          onClick={openPopup}
          disabled={!isFormValid()}
        >
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
