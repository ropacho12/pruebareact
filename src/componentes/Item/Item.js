

import React from 'react'
// import './Item.css'

import { Link} from 'react-router-dom'

const Item = ({Productos, id}) => {
  return (
    <div className='card-item'>
           <li className='card-li'>
               <h3 className='card-title'>{Productos.name}</h3>
               
               <img className='Item-img' src={Productos.img} alt={Productos.name}/>
               <Link to={`/detail/${Productos.id}`} className='Option'>Ver detalle</Link>
            </li>    
               
    </div>   
)}


export default Item
