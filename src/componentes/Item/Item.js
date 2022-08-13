
// import './Item.css'
// import { Link} from 'react-router-dom'

// const Item = ({ id, name, price, img}) => {
//   return (
   
//       <article className="CardItem">
//       <header className="Header">
//           <h2 className="ItemHeader">
//               {name}
//           </h2>
//       </header>
//       <picture>
//           <img src={img} alt={name} />
//       </picture>
//       <section>
//           <p className="Info">
//               Precio: ${price}
//           </p>
//       </section>           
//       <footer className='ItemFooter'>
//           <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
//       </footer>
//   </article>
// )
  
// }


// export default Item

import React from 'react'
import './Item.css'
import { Link} from 'react-router-dom'

const Item = ({Productos, id}) => {
  return (
    <div className='card-item'>
           <li className='card-li'>
               <h3 className='card-title'>{Productos.name}</h3>
               <img className='Item-img' src={Productos.img} alt={Productos.name}/>
               <Link to={`/detail/${Productos.id}`}>Ver detalle</Link>
            </li>    
               
    </div>   
)}


export default Item
