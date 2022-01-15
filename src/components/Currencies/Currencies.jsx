import React from 'react';
import Currency from './Currency.jsx';
import { arrayOf, string, shape, number, func } from 'prop-types';
import './Currencies.scss';

const Currencies = ({ currencies, onChange, input, onChangeInput }) => {
  return (
    <div className='currencies'>
      <input
        type='text'
        className='currencies__search'
        placeholder='Search for a currency'
        value={input}
        onChange={(event) => onChangeInput(event.target.value)}
      />
      <ul className='currencies__list'>
        {currencies.map((currency) => (
          <Currency
            key={currency.name}
            name={currency.name}
            onClick={onChange}
          />
        ))}
      </ul>
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
  input: string.isRequired,
  onChangeInput: func.isRequired,
};

export default Currencies;
