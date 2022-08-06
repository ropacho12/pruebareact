
import Item from '../Item/Item'

const ItemList = ({Productos}) => {
  return (
    <ul>
        {Productos.map (prod => <Item key={prod.id} Productos={prod}/>)}
    </ul>
  )
}

export default ItemList