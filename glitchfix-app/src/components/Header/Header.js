// React imports
import React from 'react'
// Material UI / Other Dependencies imports

// Local imports
import MainNav from '../MainNav/MainNav';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <>
    <header>
      <img className="logo" src= { logo} alt="GlitchFix Logo" />
      </header>
    <MainNav />
      </>
  )
}

export default Header
