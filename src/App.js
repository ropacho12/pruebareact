import './App.css';
import Navbar from './componentes/Navbar/Navbar'
import '../src/css/estilos.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import Cartwidget from './componentes/CartWidget/Cartwidget';
import Productos from './componentes/Productos/producto';

import Contador from './componentes/Contador/Contador';

function App() {
  return (
    
    <div className="App">
      
      <Navbar />
      
      <ItemListContainer saludos = "Leo Messi "/>
      <Productos/>
      <Contador />
      
    </div>
  );
}

export default App;
