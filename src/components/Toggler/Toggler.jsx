import React from 'react';
import { func } from 'prop-types';
// import { ImLock } from 'react-icons/im';
// import { ImUnlocked } from 'react-icons/im';
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";
import './Toggler.scss';

const Toggler = ({ onClick, isOpen }) => {
  return (
    <button
      type='button'
      className='toggler'
      onClick={() => {
        onClick();
      }}
    >
      {isOpen ? <VscChevronUp /> : <VscChevronDown />}
    </button>
  );
};

Toggler.propTypes = {
  onClick: func.isRequired,
};

export default Toggler;
