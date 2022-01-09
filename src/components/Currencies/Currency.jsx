import React from 'react';
import { string } from 'prop-types';
import './Currencies.scss';

const Currency = ({ name }) => {
  return <li className='currency'>{name}</li>;
};

Currency.propTypes = {
  name: string.isRequired,
};

export default Currency;
