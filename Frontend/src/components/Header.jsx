import React from 'react'
import './Header.css'
import { useState } from 'react'

function Header() {
  const sendForm = (formData) => {
    const searchParams = formData.get('searchParams')
    console.log(searchParams)
  }
  return (
    <div>
      <div className='header__top'>
        <button className='header__search'>
          <form action={() => {sendForm(formData)}} className='header__form'>
            <input name='searchParams' type="text" placeholder='What are you looking for?' />
          </form>
          <img src="/assets/searchIcon.svg" alt="search icon" className='search-icon' onClick={()=>{setSearchBar(prevState => !prevState)}}/>
        </button>
        <h1>LOGO</h1>
        <button>
          <img src="/assets/accountIcon.svg" alt="account icon" className='account-icon' />
        </button>
      </div>
      <nav>
        <ul className='header__nav'>
          <li className='header__li'><a className='header__link'>Loja</a></li>
          <li className='header__li'><a className='header__link'>Sobre</a></li>
          <li className='header__li'><a className='header__link'>Pontos de coleta</a></li>
          <li className='header__li'><a className='header__link'>Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
