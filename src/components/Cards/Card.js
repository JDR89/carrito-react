import "./Card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

 const BasicCard = ({title,price,image,stock,id}) => {
    

    return (
        <Card className="card-item" sx={{ minWidth: 175 }}>
            <CardContent className="card-content">
                <div>
                 <img alt="imagen" src={image}/>
                 
                <Button variant="contained" size="small" style={{margin:"18px"}}>
                    <Link className="linkDetalle" to={`/producto/${id}`}>Detalle del producto</Link>
                </Button>
                 </div>
                 
                 <p>{title} - <span>{price}</span></p>
                 
                 <p>En stock: {stock}</p>
                 
            </CardContent>
           
           
        </Card>
    );
}

export default BasicCard