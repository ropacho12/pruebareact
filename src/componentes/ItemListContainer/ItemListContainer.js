import  './ItemListContainer.css'
import {galeria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


// ItemListContainer muestra UN SOLO producto
const ItemListContainer = ({saludos}) => {
    const [Productos, setProductos] = useState ([])

        useEffect (() => {
            galeria().then (Productos => {
                setProductos(Productos)
            })
        }, [])
        //  const hola = Productos.map = (prod => <li key={prod.id}>{prod.name}</li>)

        
            return (
                
               <>
                 <h1>{saludos}</h1>
                   
                      <div style={{backgroundColor: 'red' }} >
                      {Productos.map (prod => <Link to={`/detail${prod.id}`}   key={prod.id}>{prod.name}</Link>)}

                      </div>
                  
        
                  <ItemList Productos={Productos}/>
               </> 
        
            )
}

export default ItemListContainer
           