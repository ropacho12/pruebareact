import React from 'react'

const producto = (props) => {
  return (
    <div className='hola' style={{
        backgroundColor: props.color,
    }}>
        <img src={props.name} />
        <h1>{props.name}</h1>
        <p>{props.role}</p>
    </div>
  )
}

export default producto