import React from 'react'
import './Contador.css'

const Contador = () => {
  return (
    <div className="counter-conteiner">
        <div className='counter-p'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>  
    </div>
  )
}

export default Contador