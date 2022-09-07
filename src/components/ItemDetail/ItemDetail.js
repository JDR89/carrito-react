import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount";


const ItemDetail = ({ data }) => {

  const onAdd=(count)=>{
    console.log(`Se agrego ${count} ${data.title} al carrito`)
  }

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

      <ItemCount inicial={1} stock={data.stock} title={data.title} onAdd={onAdd} />
      
    </Card>
    </div>
  );
};

export default ItemDetail;
