import {useState, useEffect } from "react";
import { getGaleriaById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
  const [data, setData]= useState ()
   
  const {productId} = useParams ()
   
  
  useEffect (() => {
        getGaleriaById (productId) 
            .then(data=>{
                setData (data)
            })
            .catch (error => {
                console.log(error)
            })

    }, [productId])

    return (
        <div>
            <h1> detalle</h1>
            <ItemDetail {...data} />
        </div>
    )
}
export default ItemDetailContainer