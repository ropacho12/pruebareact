import React from 'react'
import Cartwidget from '../CartWidget/Cartwidget'
import {NavLink } from 'react-router-dom'

const navbar = () => {
    return(
        
      <div className='contenedor'>
        <h1>Tshirts</h1>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink to={"/Argentina"} className="nav-link active" aria-current="page" >Argentina</NavLink>
            </li>
           <li className="nav-item">
              <NavLink to={"/Barcelona"} className="nav-link" >Barcelona</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to={"/Psg"} className="nav-link" >P.s.G</NavLink>
           </li>
           <Cartwidget/>
        </ul>
        {/* <Cartwidget/> */}
      </div>  
      
    )
}
export default navbar