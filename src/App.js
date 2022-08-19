import './App.css';
 import Navbar from './componentes/Navbar/Navbar'
import '../src/css/estilos.css'
 import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import Cartwidget from './componentes/CartWidget/Cartwidget';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Contador from './componentes/Contador/Contador';



function App() {
  // const total = (Cantidad)=> {
  //   console.log (`Compraste ${Cantidad}`)}


  
  return (
    
    <div className="App">
      
      <BrowserRouter>
           <Navbar />
          <Routes>
             <Route path='/' element={<ItemListContainer saludos = "TODOS los productos. "/>}/>
             <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
             
          </Routes>
          
      </BrowserRouter>
     
      {/* <Contador Stock={10} onAdd ={total}/> */}
      
      
    </div>
  );

}
export default App;
