import React from 'react'
import persLogo from '../../assets/images/persLogo.svg'
import BottomNav from '../BottomNav/BottomNav';
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <BottomNav />
          <img className="persLogo" src={persLogo} alt="Creator Logo" />
      </div>
  )
}

export default Footer
