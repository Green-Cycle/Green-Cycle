import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';
function Nav({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const handleScrollToFooter = () => {
    setMenuOpen(false);
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav>
      <ul className={menuOpen ? 'header__hamburger' : 'nav'}>
        <li className='nav__li'>
          <button className='nav__link' onClick={() => handleClick('/store')}>
            LOJA
          </button>
        </li>
        <li className='nav__li'>
          <button className='nav__link' onClick={() => handleClick('/sobre')}>
            SOBRE
          </button>
        </li>
        <li className='nav__li'>
          <button className='nav__link' onClick={() => handleClick('/maps')}>
            PONTOS DE COLETA
          </button>
        </li>
        <li className='nav__li'>
          <button className='nav__link' onClick={handleScrollToFooter}>
            CONTATO
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
