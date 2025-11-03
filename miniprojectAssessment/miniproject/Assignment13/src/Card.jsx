import React from 'react'
import './Card.css'
import img from './assets/download (3).jpg';


export default function Card(props) {
  return (
    <div>
      <img src={img}></img>
      <h1>{props.name}</h1>
    </div>
  )
};
