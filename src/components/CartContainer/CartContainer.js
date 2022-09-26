import "./CartContainer.css"
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "@mui/material";
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
    <div>
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

          <form onSubmit={sendOrder}>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Telefono"/>
            <input type="email" placeholder="Email" />
            <Button type="submit">Enviar pedido</Button>
          </form>  
          
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
