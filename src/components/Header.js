import React from 'react';
import eaubnb from '../images/eaubnb.png';

export default function Header() {
  return (
    <nav className='menu'>
      <img className='logo' src={eaubnb} />
    </nav>
  );
}