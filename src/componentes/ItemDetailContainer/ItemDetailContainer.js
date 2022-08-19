import {useState, useEffect } from "react";
import { getGaleriaById } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
  const [galeria, setGaleria]= useState ()
   
  const {id}= useParams ()
  
  
  useEffect (() => {
        getGaleriaById (id).then(response =>{
            setGaleria (response)
        })
            
          

    },[] )

    return (
        <div>
            <h1> detalle Argentina</h1>
            <ItemDetail {...galeria}/>
            
          
            
      
        </div>
    )
}
export default ItemDetailContainer