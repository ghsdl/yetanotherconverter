import React from 'react';
import Currency from './Currency.jsx';
import { arrayOf, string, shape, number, func } from 'prop-types';
import './Currencies.scss';

const Currencies = ({ currencies, onChange }) => {
  const currenciesList = currencies.map((currency) => (
    <Currency
      key={currency.name}
      name={currency.name}
      onClick={onChange}
    />
  ));
  return (
    <div className='currencies'>
      <h2 className='currencies__title'>Currencies</h2>
      <ul className='currencies__list'>{currenciesList}</ul>
    </div>
  );
};

Currencies.propTypes = {
  currencies: arrayOf(
    shape({
      name: string.isRequired,
      rate: number.isRequired,
    }),
  ).isRequired,
  onChange: func.isRequired,
};

export default Currencies;
