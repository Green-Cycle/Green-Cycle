import './Search.css';
import { useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

function Search({ menuOpen, setMenuOpen }) {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  const navigate = useNavigate();
  const [searchFile, setSearchFile] = useState('');
  const location = useLocation();
  const hideOnRoutes = ['/login', '/register'];
  const isHidden = hideOnRoutes.includes(location.pathname);
  if (isHidden) {
    return null;
  }
  const handleSearch = async (evt) => {
    evt.preventDefault();
    setSearchParams('q', searchFile);
    navigate(`/store?q=${searchFile}`);
    setSearchFile('');
    setMenuOpen(false);
  };
  return (
    <div className={menuOpen ? 'header__hamburger' : 'search-container'}>
      <form className='search__form' onSubmit={handleSearch}>
        <input
          name='searchParams'
          type='text'
          value={searchFile}
          onChange={(e) => setSearchFile(e.target.value)}
          placeholder='O que deseja buscar?'
          maxLength={20}
        />
        <button type='submit' className='header__search'>
          <img
            src='/assets/searchIcon.svg'
            alt='search icon'
            className='search-icon'
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
