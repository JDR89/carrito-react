import "./CartContainer.css"
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { db } from "../../data/Firebase";
import {collection,addDoc} from "firebase/firestore"
import CartCard from "./CartCards";
import Grid from '@mui/material/Unstable_Grid2'




const CartContainer = () => {
  const { listaProductosCarrito, removeProduct, clearCart, getTotalPago } =
    useContext(CartContext);
  const [idOrder,setIdOrder]=useState("")
  console.log(idOrder)

  const sendOrder= (e) =>{
    e.preventDefault()
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
        
      },
      date:new Date(),
      items: listaProductosCarrito,
      total: getTotalPago(),

    };

    const queryRef = collection(db,"orders")
    addDoc(queryRef,order).then(resp=>setIdOrder(resp.id))
    console.log(order)
  }



  return (
    <div className="cart-container">
      {listaProductosCarrito.length > 0 ? (
        <>
          <Grid container className="contenedor" spacing={2}>
          {listaProductosCarrito.map((e) => (
          
          <Grid>
          <CartCard key={e.id} title={e.title} price={e.price} cantidad={e.cantidad} image={e.image} total={e.precioTotal} remove={removeProduct} id={e.id}/>
          </Grid>
          ))}
          </Grid>

          <p>Precio total:${getTotalPago()}</p>
          <Button onClick={clearCart}>Vaciar carrito</Button>

          <Box className="form-caja" container>
          <form className="form" onSubmit={sendOrder}>
            <p className="p-input">Nombre:</p>
            <input className="form-input" type="text" placeholder="Nombre"/><br/>
            <p className="p-input">Telefono:</p>
            <input className="form-input" type="text" placeholder="Telefono"/><br/>
            <p className="p-input">Email:</p>
            <input  className="form-input" type="email" placeholder="Email" /><br/>
            <Button style={{marginTop:"1.5rem",marginBottom:"1.5rem"}} variant="outlined" color="error" className="submit" type="submit">Enviar pedido</Button>
          </form>  
          </Box>
        </>
      ) : (
        <>
          <p>No hay productos agregados al carrito</p>
          <Button>
            <Link to={"/"}>Ir a inicio</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default CartContainer;
