import React from 'react';
import { number, func } from 'prop-types';
import { VscDebugRestart } from "react-icons/vsc";
import './Header.scss';

const Header = ({ value, onChange, onClick }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>Converter</h1>
      <p className='header__content'>
        <input
          className='header__value'
          type='number'
          value={value}
          min={0}
          onChange={(event) => onChange(event.target.value)}
        />
        euro
        <button
          type='button'
          className='header__reset'
          onClick={() => {
            onClick();
          }}
        >
          <VscDebugRestart className='header__icon' />
        </button>
      </p>
    </header>
  );
};

Header.propTypes = {
  value: number.isRequired,
  onChange: func.isRequired,
  onClick: func.isRequired,
};

export default Header;
