import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../data/ProductsMock";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();
  const [load, setLoad] = useState(true);

  const [product, setProduct] = useState({});

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((response) => {
      idProducto
        ? setProduct(response.find((e) => e.id === Number(idProducto)))
        : setProduct(response);
      setLoad(false);
    });
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
