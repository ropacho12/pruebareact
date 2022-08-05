import  './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { galeria } from '../../asyncMock'


const ItemListContainer = ({saludos}) => {
    const [Productos, setProductos] = useState([])
    useEffect (() => {
        galeria().then(Productos =>{
          setProductos(Productos)     
        })
    }, [])
    
    const galeriaLi = Productos.map(prod => <li>{prod.img}</li>)
    
    return (
       <> <h1>{saludos}</h1>
        <ul>
            {galeriaLi}
        </ul>
       </> 
    )  
    // porque se pone el mayor y menor envoviendo las etiquetas html?  
    
}

export default ItemListContainer