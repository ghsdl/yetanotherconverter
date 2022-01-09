import React from 'react';
import Header from '../Header/Header.jsx';
import Currencies from '../Currencies/Currencies.jsx';
import Amount from '../Amount/Amount.jsx';
import './Converter.scss';

const Converter = () => {
  return (
    <div className='converter'>
      <Header />
      <Currencies />
      <Amount />
    </div>
  );
};

export default Converter;
