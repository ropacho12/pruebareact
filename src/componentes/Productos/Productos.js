import React, { useState } from "react";
import Productos from "./Productos/Producto";


const Productos = () => {
  const [Productos] = useState([
    { id: 1,
      color: "red",
      name: "Argentina",
      role: "camiseta titular",
      img: "https://http2.mlstatic.com/D_NQ_NP_946006-MLA50543725241_072022-W.jpg",
    },
    {
      id: 2,
      name: "Barcelona",
      role: "camiseta alternativa",
      img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpghttps://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg",
    },
    {
      id: 3,
      name: "Psg",
      role: "camiseta de entrenamiento",
      img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg",
    },
  ]);

  return (
    <div className="row">
      {Productos.map((Productos) => {
        return (
          <Productos
            key={Productos.id}
            name={Productos.name}
            img={Productos.img}
            role={Productos.role}
          />
        );
      })}
    </div>
  );
};

export default Productos;