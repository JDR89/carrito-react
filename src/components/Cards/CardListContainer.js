import CardList from "./CardList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {collection,getDocs,query,where} from "firebase/firestore"
import {db} from "../../data/Firebase"

const CardListContainer = () => {
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);

  const [load, SetLoad] = useState(true);

  useEffect(()=>{
    const getProducts = async ()=>{
      
      try {
        
        let queryRef =""
        
        if(!categoria){
          
          queryRef = collection(db,"items")
          
          
        }else{
          
          queryRef = query(collection(db,"items"),where("categoria","==",categoria))
          
        }
        
        
        
        const response = await getDocs(queryRef)
        const datos = response.docs.map(doc=>{
          const newDoc = {
            ...doc.data(),
            id:doc.id
          }
          
          return newDoc
        })
        SetLoad(false)
        setProducts(datos)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  },[categoria])


  return (
    <>
      {load ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15rem" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        load
      )}
      <CardList items={products} />
    </>
  );
};

export default CardListContainer;
