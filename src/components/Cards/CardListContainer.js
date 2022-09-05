import CardList from "./CardList"
import { useState, useEffect } from "react";
import productos from "../../data/ProductsMock";
import { useParams } from "react-router-dom";

const CardListContainer = () =>{

  
  const{tipoProducto}=useParams()


  const [products, setProducts] = useState([]);


  useEffect(() => {

    const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
    };

    getProducts()
      .then((resp) => {
        if(!tipoProducto){
          setProducts(resp)
        }else{
          const nuevaLista = resp.filter(e=>e.categoria === tipoProducto)
          setProducts(nuevaLista)
        }
    
      })
      .catch((error) => {
        console.log("error " + error);
      });
  },[tipoProducto]);

  return(
    <>
      <CardList items={products}/>
    </>
  )
}

export default CardListContainer