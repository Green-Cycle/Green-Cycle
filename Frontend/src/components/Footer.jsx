import './Footer.css';
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__columns'>
        {' '}
        <div className='footer__column'>
          <img
            src='./assets/leaf.svg'
            alt='icone de folha'
            className='footer__icon'
          />
          <p>Sobre</p>
        </div>
      </div>

      <div className='footer__column-social '>
        <span>Contato</span>
        <div className='footer__social'>
          <img src='./assets/mail.svg' alt='mail icon' />
          <a
            className='footer__mail'
            href='mailto:grupo3ht4@gmail.com?subject="Suporte"'
          >
            grupo3ht4@gmail.com
          </a>{' '}
        </div>
        <div className='footer__social'>
          <img src='./assets/phone.svg' alt='phone icon' />
          <p>(00) 00000-0000</p>{' '}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
