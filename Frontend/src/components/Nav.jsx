import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({ menuOpen, setMenuOpen }) {
  const handleScrollToFooter = () => {
    () => setMenuOpen(false);
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Footer not found');
    }
  };

  return (
    <nav>
      <ul className={menuOpen ? 'header__hamburger' : 'nav'}>
        <li className='nav__li'>
          <Link
            className='nav__link'
            to='/store'
            onClick={() => setMenuOpen(false)}
          >
            LOJA
          </Link>
        </li>
        <li className='nav__li'>
          <Link
            className='nav__link'
            to='/sobre'
            onClick={() => setMenuOpen(false)}
          >
            SOBRE
          </Link>
        </li>
        <li className='nav__li'>
          <Link
            className='nav__link'
            to='/maps'
            onClick={() => setMenuOpen(false)}
          >
            PONTOS DE COLETA
          </Link>
        </li>
        <li className='nav__li'>
          <button onClick={handleScrollToFooter} className='nav__link'>
            CONTATO
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
