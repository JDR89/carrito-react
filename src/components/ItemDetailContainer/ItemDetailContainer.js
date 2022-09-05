import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from "../../data/ProductsMock"
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{

    const{idProducto}=useParams()
    
    const [product,setProduct]=useState({})

    const getItem = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        });
      };

      useEffect(()=>{
        getItem()
        .then(response=>{
          idProducto?
           setProduct(response.find(e=>e.id=== Number(idProducto)))
           : setProduct(response)
          
        })
      },[idProducto])

    return(
        
        <ItemDetail data={product}/>
        
    )
}

export default ItemDetailContainer