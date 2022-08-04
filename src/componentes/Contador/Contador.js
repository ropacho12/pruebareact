import './Contador.css'
import React, {useState} from 'react'
const Contador = () => {
    const [Contador, setCount]= useState (1);
  return (
    <div className="counter-conteiner">
        <div className="counter-p">
          <button onClick={() => {setCount (Contador -1)}}>-</button>
          <span>1</span>
          <button onClick={() => {setCount (Contador +1)}}>+</button>
        </div>  
    </div>
  )
}
export default Contador