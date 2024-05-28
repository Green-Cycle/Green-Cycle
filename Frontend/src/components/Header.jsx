import React from 'react'
import './Header.css'
import { useState } from 'react'

function Header() {
  const [searchBar, setSearchBar] = useState(true)
  const sendForm = (formData) => {
    const searchParams = formData.get('searchParams')
    console.log(searchParams)
  }
  return (
    <div className='header'>
      <button className='header__search'>
        <img src="/assets/searchIcon.svg" alt="search icon" className='search-icon' onClick={()=>{setSearchBar(prevState => !prevState)}}/>
        <form action={() => {sendForm(formData)}} className={searchBar ? 'header__form' : 'header__form_inactive'}>
          <input name='searchParams' type="text" placeholder='What are you looking for?' />
        </form>
      </button>
      <h1>LOGO</h1>
      <button>
        <img src="/assets/accountIcon.svg" alt="account icon" className='account-icon' />
      </button>
    </div>
  )
}

export default Header
