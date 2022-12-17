// React imports
import React from 'react'
// Material UI / Other Dependencies imports

// Local imports
import TopNav from '../MainNav/TopNav';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <>
    <header>
      <img className="logo" src= { logo} alt="GlitchFix Logo" />
      </header>
    <TopNav />
      </>
  )
}

export default Header
