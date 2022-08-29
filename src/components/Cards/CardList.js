import BasicCard from "./Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

const CardList = () => {
  const [products, setProducts] = useState([]);

  const productos = [
    {
      id:1,
      title: "Remera seleccion XL",
      price: "$15.000",
      image: "camiseta.webp",
      stock: 9,
    },

    {
      id: 2,
      title: "Remera seleccion L",
      price: "$13.000",
      image: "camiseta.webp",
      stock: 6,
    },

    {
      id: 3,
      title: "Campera M",
      price: "$12.000",
      image: "campera.webp",
      stock: 7,
    },

    {
      id: 4,
      title: "Campera S",
      price: "$10.000",
      image: "campera.webp",
      stock: 5,
    },
  ];

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
