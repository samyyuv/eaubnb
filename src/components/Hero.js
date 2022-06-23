import React from 'react';

export default function Hero() {
  return (
    <section className='content hero'>
      <div className='photosIntro'>
        <div className='column'>
          <img className='photo' src={require('../images/hero/yoga.jpg')} />
        </div>
        <div className='column'>
          <img className='photo' src={require('../images/hero/kids.jpg')} />
          <img className='photo' src={require('../images/hero/beach-surf.jpg')} />
        </div>
        <div className='column '>
          <img className='photo' src={require('../images/hero/flip.jpg')} />
          <img className='photo' src={require('../images/hero/cenote.jpg')} />
        </div>
        <div className='column'>
          <img className='photo' src={require('../images/hero/kayak.jpg')} />
          <img className='photo' src={require('../images/hero/swim.jpg')} />
        </div>
        <div className='column column-up'>
          <img className='photo' src={require('../images/hero/fishing.jpg')} />
          <img className='photo' src={require('../images/hero/canoe.jpg')} />
        </div>
      </div>
      <div className="homeText">
        <h1 className='title1'>Online experiences</h1>
        <p className='text1'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}