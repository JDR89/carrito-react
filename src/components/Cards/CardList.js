import BasicCard from "./Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import productos from "../../data/ProductsMock";



const CardList = () => {
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


  return (
    <>
    
      <Box className="caja" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
          products.map((e) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={e.id}>
                <BasicCard
                  title={e.title}
                  price={e.price}
                  image={e.image}
                  stock={e.stock}
                />
              </Grid>
            );
          })
          }
        </Grid>
      </Box>
    </>
  );
};

export default CardList;
