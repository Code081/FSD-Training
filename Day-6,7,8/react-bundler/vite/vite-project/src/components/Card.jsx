import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='Card'>
        <h2>{props.name}</h2>
        <img src={props.img} alt="tree" />
        <h2>{props.roll}</h2>
    </div>
  )
}

export default Card