import "./Card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ItemCount } from "../ItemCount/ItemCount";


 const BasicCard = ({title,price,image,stock}) => {
    
    const agregar=()=>{
        console.log(`${title} se agrego al carrito`)
    }

    return (
        <Card className="card-item" sx={{ minWidth: 175 }}>
            <CardContent>
                <div>
                 <img alt="imagen" src={`./imagenes/${image}`}/>
                 </div>
                 <p>{title}</p>
                 <span>{price}</span>
                 <p>En stock: {stock}</p>
            </CardContent>
           <ItemCount inicial={1} stock={stock} title={title} agregarProducto={agregar} />
           
        </Card>
    );
}

export default BasicCard