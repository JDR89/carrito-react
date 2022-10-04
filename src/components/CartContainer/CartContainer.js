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



import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';





const CartContainer = () => {

  const estiloModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

 
 
 
 
 
  const { listaProductosCarrito, removeProduct, clearCart, getTotalPago } =
  useContext(CartContext);
  const [idOrder,setIdOrder]=useState("")
  

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

          <h3 variant="h2">Precio total:${getTotalPago()}</h3>
          <Button onClick={clearCart}>Vaciar carrito</Button>

          <Box className="form-caja" container>
          <form className="form" onSubmit={sendOrder}>
            <h4 className="p-input">Nombre:</h4>
            <input className="form-input" type="text" placeholder="Nombre"/><br/>
            <h4 className="p-input">Telefono:</h4>
            <input className="form-input" type="text" placeholder="Telefono"/><br/>
            <h4 className="p-input">Email:</h4>
            <input  className="form-input" type="email" placeholder="Email" /><br/>
            <Button  onClick={handleOpen} style={{marginTop:"1.5rem",marginBottom:"1.5rem"}} variant="outlined" color="error" className="submit" type="submit">Enviar pedido</Button>
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



<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estiloModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Su pedido fue enviado con exito¡¡
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>Ante cualquier consulta su comprobante de pedido es:</p>
            {idOrder}
          </Typography>
        </Box>
      </Modal>


    </div>
  );
};

export default CartContainer;
