import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from "../../data/ProductsMock"

const ItemDetailContainer=()=>{

    const [product,setProduct]=useState({})

    const getItem = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        });
      };

      useEffect(()=>{
        getItem()
        .then((response)=>{
            setProduct(response.find(e=>e.id===1))
        })
      },[])

    return(
        <>
        <div>
            ItemDetailContainer
        </div>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer