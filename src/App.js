import './App.css';
import Navbar from './componentes/Navbar/Navbar'
import '../src/css/estilos.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import Cartwidget from './componentes/CartWidget/Cartwidget';


import Contador from './componentes/Contador/Contador';

function App() {
  const total = (Cantidad)=> {
    console.log (`Compraste ${Cantidad}`)
  }


  return (
    
    <div className="App">
      
      <Navbar />
      
      <ItemListContainer saludos = "Leo Messi "/>
     
      <Contador Stock={10} onAdd ={total}/>
      
    </div>
  );
}

export default App;
