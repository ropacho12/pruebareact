
const Productos =
[
  { id: 1,
    stock:10,
    name: "Argentina",
    img: "https://cf.shopee.com.ar/file/4343acb9b227d6f57bf20c25b7734956",
  },
  {
    id: 2,
    stock:20,
    name: "Barcelona",
    img: "https://http2.mlstatic.com/D_NQ_NP_946006-MLA50543725241_072022-W.jpg",
  },
  {
    id: 3,
    stock:30,
    name: "Psg",
    img: "https://media.revistagq.com/photos/61234dd677e5ac512f83f927/1:1/w_1728,h_1728,c_limit/descarga.jpeg",
  },
]

export const galeria = () =>{
    return new Promise ((resolve) =>{
        setTimeout (()=> {
            resolve (Productos)
        }, 3000)

    })
}