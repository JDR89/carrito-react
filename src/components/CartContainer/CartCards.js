import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./CartCards.css"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CartCard({title,price,cantidad,image,total,remove,id}) {
  return (
    <Card className='card' sx={{ maxWidth: 245,minWidth:245,maxHeight:400,minHeight:350 }}>
      <img className='img-card' alt='producto' src={image}/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio unidad: ${price} <br/>
          Cantidad:{cantidad} <br/>
          Total:{total}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>remove(id)}><p className='letra-boton'>Eliminar producto</p></Button>
      </CardActions>
    </Card>
  );
}