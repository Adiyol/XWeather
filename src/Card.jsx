import React from 'react'

const Card = (props) => {
  return (
    <div className='weather-cards'>
        <p>{props.title}</p>
        <p>{props.value}</p>
      </div>
  )
}

export default Card