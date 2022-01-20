import React, { useState } from 'react';
import Header from '../Header/Header.jsx';
import Currencies from '../Currencies/Currencies.jsx';
import Amount from '../Amount/Amount.jsx';
import Toggler from '../Toggler/Toggler.jsx';
import { conversion, filter } from './ConverterUtils.js';
import './Converter.scss';

import currencies from '../../data/currencies.js';

const Converter = () => {
  const [toggle, setToggle] = useState(null);
  const [currency, setCurrency] = useState('United States Dollar');
  const [baseValue, setBaseValue] = useState(1);
  const [search, setSearch] = useState('');

  return (
    <div className='converter'>
      <Header
        value={baseValue}
        onChange={(value) => {
          setBaseValue(Number(value));
        }}
        onClick={() => {
          setBaseValue(1);
          setCurrency('United States Dollar');
          setSearch('');
        }}
      />
      <Toggler onClick={() => setToggle(!toggle)} isOpen={toggle} />
      {toggle && (
        <Currencies
          currencies={filter(currencies, search)}
          onChange={(name) => {
            setCurrency(name);
            setToggle(!toggle);
          }}
          input={search}
          onChangeInput={(value) => {
            setSearch(value);
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
