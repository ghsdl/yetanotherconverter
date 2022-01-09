import React from 'react';
import Currency from './Currency.jsx';
import './Currencies.scss';

const Currencies = () => {
  return (
    <div className='currencies'>
      <h1 className='currencies__title'></h1>
      <ul className='currencies__list'>
        <Currency />
        <Currency />
      </ul>
    </div>
  );
};

export default Currencies;
