import React from 'react';
import { string, func } from 'prop-types';
import './Currencies.scss';

const Currency = ({ name, onClick }) => {
  return (
    <li
      className='currency'
      onClick={() => {
        onClick(name);
      }}
    >
      {name}
    </li>
  );
};

Currency.propTypes = {
  name: string.isRequired,
  onClick: func.isRequired,
};

export default Currency;
