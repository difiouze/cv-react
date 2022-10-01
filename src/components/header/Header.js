import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, je suis</h5>
        <h1>Laurent RAVIX</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ ME } alt='laurent ravix' />
        </div>

        <a href='#contact' className='scroll__down'>Scroller vers le bas</a>

      </div>
    </header>
  )
}

export default Header