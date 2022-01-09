import React from 'react';
import { string, number } from 'prop-types';
import './Amount.scss';

const Amount = ({ value, currency }) => {
  return (
    <footer className='amount'>
      <p className='amount__value'>{value}</p>
      <p className='amount__currency'>{currency}</p>
    </footer>
  );
};

Amount.propTypes = {
  value: number.isRequired,
  currency: string.isRequired,
};

export default Amount;
