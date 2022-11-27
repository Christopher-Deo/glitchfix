import React from 'react'
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img className="logo" src= { logo} alt="GlitchFix Logo" />
    </header>
  )
}

export default Header
