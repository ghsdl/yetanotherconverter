import React from 'react';
import Currency from './Currency.jsx';
import './Currencies.scss';

const Currencies = () => {
  return (
    <div className='currencies'>
      <h2 className='currencies__title'>Currencies</h2>
      <ul className='currencies__list'>
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
      </ul>
    </div>
  );
};

export default Currencies;
