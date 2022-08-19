// import Item from "../Item/I
import React from 'react';
import Contador from '../Contador/Contador';


const ItemDetail = ({name, categoria}) =>{
    
    const total = (Cantidad)=> {
        console.log (`Compraste ${Cantidad}`);
    };
    
    return (
        <div>
            <h1>{name}</h1>
            
            <h4>{categoria}</h4>



            <Contador Stock={10} onAdd ={total}/>
        </div>
     
      
        
    )
    
}
export default ItemDetail