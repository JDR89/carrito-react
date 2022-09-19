import CardList from "./CardList";
import { useState, useEffect } from "react";
import productos from "../../data/ProductsMock";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CardListContainer = () => {
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);

  const [load, SetLoad] = useState(true);

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
        if (!categoria) {
          setProducts(resp);
        } else {
          const nuevaLista = resp.filter((e) => e.categoria === categoria);
          setProducts(nuevaLista);
        }
        SetLoad(false);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, [categoria]);

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
