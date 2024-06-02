import './InfoToolTip.css';
function InfoToolTip({ isOpen, message }) {
  return (
    <div className={`info ${isOpen ? 'info__opened' : ''}`}>
      <div className='info__container'>
        <img
          className='info__image'
          src='./assets/checkout.svg'
          alt='logo da greencycle'
        />
        <h1 className='info__title'>{message}</h1>
      </div>
    </div>
  );
}

export default InfoToolTip;
