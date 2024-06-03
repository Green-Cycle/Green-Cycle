import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';

function Nav({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setMenuOpen(false);

    navigate(path);
  };

  const handleScrollToFooter = () => {
    setMenuOpen(false);

    setTimeout(() => {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Footer not found');
      }
    }, 0);
  };

  return (
    <nav>
      <ul className={menuOpen ? 'header__hamburger' : 'nav'}>
        <li className='nav__li'>
          <Link
            className='nav__link'
            to='/store'
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/store');
            }}
          >
            LOJA
          </Link>
        </li>
        <li className='nav__li'>
          <Link
            className='nav__link'
            to='/sobre'
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/sobre');
            }}
          >
            SOBRE
          </Link>
        </li>
        <li className='nav__li'>
          <Link
            className='nav__link'
            to='/maps'
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/maps');
            }}
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
