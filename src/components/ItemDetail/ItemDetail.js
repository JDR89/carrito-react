import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ data }) => {
  const [cantidad, setCantidad] = useState(0);
  const {addProduct} = useContext(CartContext)
  
  
  const onAdd = (count) => {
    setCantidad(count);
    
    addProduct(data,count)
    
  };
 

  return (
    <div className="contenedor-item">
      <Card className="item-card" sx={{ minWidth: 175 }}>
        <CardContent sx={{ minWidth: 175 }} className="item-detail">
          <div>
            <p>{data.title}</p>
            <p>{data.price}</p>
            <p>Stock:{data.stock}</p>
          </div>
          <div>
            <img alt="imagen" src={data.image} />
          </div>
        </CardContent>

        {
        cantidad > 0 ? (
          <Link className="terminarCompra" to={"/cart"}>
            <Button variant="contained" className="btnTerminarCompra">
              IR AL CARRITO
            </Button>{" "}
          </Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={data.stock}
            title={data.title}
            onAdd={onAdd}
          />
        )}
      </Card>
    </div>
  );
};

export default ItemDetail;
