import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { listaProductosCarrito, removeProduct, clearCart} = useContext(CartContext);
    

  return (
    <div>
      {listaProductosCarrito.length > 0 ? (
        <>
          {listaProductosCarrito.map((e) => (
            <p>
              {e.title} Cantidad:{e.cantidad} Precio unidad:${e.price}  Precio total:${e.precioTotal}
              <Button onClick={() => removeProduct(e.id)}>
                Eliminar producto
              </Button>
            </p>
          ))}
          <Button onClick={clearCart}>Vaciar carrito</Button>
          {/* <Button onClick={() => isInCart(1)}>probar isInCart</Button> */}
        </>
      ) : (
        <>
        <p>No hay productos agregados al carrito</p>
        <Button><Link to={"/"}>Ir a inicio</Link></Button>
        </>
      )}
    </div>
  );
};

export default CartContainer;
