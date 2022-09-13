import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Button } from "@mui/material"


    const CartContainer = () =>{

        const {listaProductosCarrito,removeProduct,clearCart,isInCart}=useContext(CartContext)
        

    return(
        <div>
            {
                listaProductosCarrito.map(e=><p>{e.title} {e.count} 
                <Button onClick={()=>removeProduct(e.id)}>Eliminar producto</Button></p>)
                
            }
                <Button onClick={clearCart}>Vaciar carrito</Button>
                <Button onClick={()=>isInCart(2)}>probar</Button>
         </div>
    )
}

export default CartContainer


