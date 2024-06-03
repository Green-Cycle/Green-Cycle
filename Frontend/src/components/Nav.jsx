import './Nav.css';
import { Link } from 'react-router-dom';
function Nav({ menuOpen }) {
  return (
    <nav>
      <ul className={menuOpen ? 'header__hamburger' : 'nav'}>
        <li className='nav__li'>
          <Link className='nav__link' to={'/store'}>
            Loja
          </Link>
        </li>
        <li className='nav__li'>
          <Link className='nav__link' to={'/sobre'}>
            Sobre nós
          </Link>
        </li>
        <li className='nav__li'>
          <Link className='nav__link' to={'/maps'}>
            Pontos de coleta
          </Link>
        </li>
        <li className='nav__li'>
          <a className='nav__link'>Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
