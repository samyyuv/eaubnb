import React from 'react';

export default function Cards(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }


  return (
    <div className='card'>
      <div className='card-image-container'>
        <img className='card-photo' src={`/images/cards/${props.item.img}`} />
        {badgeText && <span className='availability'>{badgeText}</span>}

      </div>

      <div className='info-container'>
        <div className='info'>
          <img className='star' src={"/images/cards/star.png"} />
          <p>{props.item.stats.rating}</p>
          <p className='gray'>({props.item.stats.reviewCount}) | {props.item.country}</p>
        </div>
        <p>{props.item.title}</p>
        <p><span className='strong'>From ${props.item.price}</span> / person</p>
      </div>
    </div >
  );
}

