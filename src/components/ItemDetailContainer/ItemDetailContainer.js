import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {doc,getDoc} from "firebase/firestore"
import {db} from "../../data/Firebase"

const ItemDetailContainer = () => {

  const { idProducto } = useParams();

  const [load, setLoad] = useState(true);

  const [product, setProduct] = useState({});

 

  useEffect(() => {
    const queryRef = doc(db,"items",idProducto)
    getDoc(queryRef).then(response=>{
      setLoad(false)
      const newDoc={
       ...response.data(),
       id:response.id
      }
      setProduct(newDoc)
    }).catch(error=>console.log(error))
   
  }, [idProducto]);

  return (
    <>
      {load ? (
        <Box sx={{ display: "flex",justifyContent:"center",marginTop:"2rem" }}>
          <CircularProgress />
        </Box>
      ) : (
        load
      )}

      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;
