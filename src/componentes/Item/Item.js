import React from 'react'

const Item = ({Productos,}) => {
  return (
    <li>
        <h3>{Productos.name}</h3>
        <img src={Productos.img} alt={Productos.name}/>
        
    </li>
  )
}

export default Item