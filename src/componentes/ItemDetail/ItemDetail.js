// import Item from "../Item/I
import React from 'react';
import Contador from '../Contador/Contador';
import Button from '../Button/Button';

const ItemDetail = ({name, categoria}) =>{
    
    const total = (Cantidad)=> {
        console.log (`Compraste ${Cantidad}`);
    };
    
    return (
        <div>
            <h1>{name}</h1>
            
            <img/>



            <Contador Stock={10} onAdd ={total}/>
            <Button/>
        </div>
     
      
        
    )
    
}
export default ItemDetail