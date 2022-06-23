import React from 'react';
import card1 from '../images/cards/card1.jpg';

export default function Cards() {
  return (
    <section className='card-container content'>
      <div className='card'>
        <div className='card-image-container'>
          <img className='card-photo' src={card1} />
          <span className='availability'>SOLD OUT</span>
        </div>

        <div className='info-container'>
          <div className='info'>
            <img className='star' src={require('../images/cards/star.png')} />
            <p>5.0</p>
            <p className='gray'>(6) | USA</p>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <p><span className='strong'>From $136</span> / person</p>
        </div>
      </div>
    </section >
  );
}