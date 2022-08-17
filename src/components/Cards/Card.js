import "./Card.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


 const BasicCard = ({title,price,image}) => {
    
    return (
        <Card className="card-item" sx={{ minWidth: 175 }}>
            <CardContent>
                <div>
                 <img alt="imagen" src={`./${image}`}/>
                 </div>
                 <p>{title}</p>
                 <span>{price}</span>
            </CardContent>
            <CardActions>
                <Button size="small">Comprar</Button>
            </CardActions>
        </Card>
    );
}

export default BasicCard