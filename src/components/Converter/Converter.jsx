import React, { useState } from 'react';
import Header from '../Header/Header.jsx';
import Currencies from '../Currencies/Currencies.jsx';
import Amount from '../Amount/Amount.jsx';
import Toggler from '../Toggler/Toggler.jsx';
import { conversion } from './ConverterUtils.js';
import './Converter.scss';

import currencies from '../../data/currencies.js';

const Converter = () => {
  const [toggle, setToggle] = useState(null);
  const [currency, setCurrency] = useState('United States Dollar');
  const [baseValue, setBaseValue] = useState(1);

  return (
    <div className='converter'>
      <Header value={baseValue} />
      <Toggler onClick={() => setToggle(!toggle)} isOpen={toggle} />
      {toggle && (
        <Currencies
          currencies={currencies}
          onChange={(name) => {
            setCurrency(name);
          }}
        />
      )}
      <Amount
        value={conversion(currency, baseValue, currencies)}
        currency={currency}
      />
    </div>
  );
};

export default Converter;
