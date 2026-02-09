import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.image} alt="profile" style={{height:200, width:200, borderRadius:"50%"}}/>
      <p>Name:   {props.name}</p>
      <p>Class:  {props.class}</p>
    </div>
  );
}

export default Card;
