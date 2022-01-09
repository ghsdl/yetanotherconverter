import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Converter from './components/Converter/Converter.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Converter />
  </React.StrictMode>,
  document.getElementById('root')
);
