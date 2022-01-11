import React, { useState } from 'react';
import Header from '../Header/Header.jsx';
import Currencies from '../Currencies/Currencies.jsx';
import Amount from '../Amount/Amount.jsx';
import './Converter.scss';

import currencies from '../../data/currencies.js';

const Converter = () => {
  const [toggle, setToggle] = useState(null);
  return (
    <div className='converter'>
      <Header value={5} />
      <button type='button' onClick={() => setToggle(!toggle)}>
        Show currencies
      </button>
      {toggle && <Currencies currencies={currencies} />}
      <Amount value={1.09} currency='Pound' />
    </div>
  );
};

export default Converter;
