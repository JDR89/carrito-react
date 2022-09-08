import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const ItemDetail = ({ data }) => {

  const [cantidad,setCantidad]=useState(0)

  const onAdd=(count)=>{
    setCantidad(count)
    // console.log(`Se agrego ${count} ${data.title} al carrito`)
  }
  console.log(cantidad)

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
          <img alt="imagen" src={`../imagenes/${data.image}`} />
        </div>

      </CardContent>

      {cantidad>0? <Link className="terminarCompra" to={"/cart"}><Button className="btnTerminarCompra">TERMINAR COMPRA</Button> </Link> :<ItemCount inicial={1} stock={data.stock} title={data.title} onAdd={onAdd}/>}
      
    </Card>
    </div>
  );
};

export default ItemDetail;
