import './Contador.css'
import React, {useState} from 'react'

const Contador = ({Stock, onAdd}) => {
    const [Contador, setCount]= useState (1)
       
       
    const Disminuir = ()=> {
      if (Contador > 1){ 
         setCount (Contador - 1)
        }
      }
     const Sumar= ()=>{
      if (Contador < Stock){
        setCount (Contador + 1)
      }
     }
    
  return (
    <div className="counter-conteiner">
        <div className="counter-p">
          <button onClick={Disminuir}>-</button>
          <span>{Contador}</span>
          <button onClick={Sumar}>+</button>
          <button onClick={()=> onAdd(Contador)} >Agregar al carrito</button>
        </div>  
    </div>
  )
}
export default Contador