import  './ItemListContainer.css'
import {galeria, Productos} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'

const ItemListContainer = ({saludos}) => {
    const [Productos, setProductos] = useState ([])
       
        useEffect (() => {
            galeria().then (Productos => {
                setProductos(Productos)
            })
        }, [])





    return (
       <>
         <h1>{saludos}</h1>
           {/* <ul>
              {Productos.map (prop => <li key={prod.id}>{prod.name}</li>)}
           </ul> */}

          <ItemList Productos={Productos}/>
       </> 
       
    )
    
    
}

export default ItemListContainer