import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Converter</h1>
      <p className='header__value'>1 euro</p>
    </header>
  );
};

export default Header;
