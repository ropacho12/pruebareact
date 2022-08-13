import React from 'react'
import Cartwidget from '../CartWidget/Cartwidget'

const navbar = () => {
    return(
        
      <div className='contenedor'>
        <h1>Tshirts</h1>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" >Inicio</a>
            </li>
           <li className="nav-item">
              <a className="nav-link" >Productos</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" >Contactanos</a>
           </li>
           <Cartwidget/>
        </ul>
        {/* <Cartwidget/> */}
      </div>  
      
    )
}
export default navbar