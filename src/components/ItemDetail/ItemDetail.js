import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ItemDetail.css"

const ItemDetail = ({ data }) => {
  return (
    <div className="contenedor-item">
    <Card className="item-card" sx={{ minWidth: 175 }}>
      <CardContent sx={{ minWidth: 175 }} className="item-detail">
        <div>
          <p>{data.title}</p>
          <p>{data.price}</p>
        </div>
        <div>
          <img alt="imagen" src={`../imagenes/${data.image}`} />
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default ItemDetail;
