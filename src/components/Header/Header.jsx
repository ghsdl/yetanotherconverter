import React from 'react';
import { number } from 'prop-types';
import './Header.scss';

const Header = ({ value }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>Converter</h1>
      <p className='header__value'>{value} euro</p>
    </header>
  );
};

Header.propTypes = {
  value: number.isRequired,
};

export default Header;
