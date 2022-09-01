import CardList from "./CardList"
import { useState, useEffect } from "react";
import productos from "../../data/ProductsMock";

const CardListContainer = () =>{

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
        setProducts(resp);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);

  return(
    <>
      <CardList items={products}/>
    </>
  )
}

export default CardListContainer