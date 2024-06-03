import './Nav.css';
import { Link } from 'react-router-dom';
function Nav({ menuOpen }) {
  const handleClick = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav>
      <ul className={menuOpen ? 'header__hamburger' : 'nav'}>
        <li className='nav__li'>
          <Link className='nav__link' to={'/store'}>
            LOJA
          </Link>
        </li>
        <li className='nav__li'>
          <Link className='nav__link' to={'/sobre'}>
            SOBRE
          </Link>
        </li>
        <li className='nav__li'>
          <Link className='nav__link' to={'/maps'}>
            PONTOS DE COLETA
          </Link>
        </li>
        <li className='nav__li'>
          <a onClick={handleClick} className='nav__link'>
            CONTATO
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
