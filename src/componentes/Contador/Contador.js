import './Contador.css'
import React, {useState} from 'react'
const Contador = () => {
    const [Contador, setCount]= useState (1);
    function Disminuir () { if (Contador > 0) { setCount(Contador-1)}}
    function Stock() { if (Contador <= 5) { setCount(Contador +1)}}
  
    return (
    <div className="counter-conteiner">
        <div className="counter-p">
          <button onClick={Disminuir}>-</button>
          <span>{Contador}</span>
          <button  onClick={Stock}>+</button>
        </div>  
    </div>
  )
}
export default Contador