import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
   const [listaProductosCarrito,setListaProductosCarrito] = useState([])

   const addProduct =(producto,count)=>{
         const nuevoProducto={...producto,cantidad:count}

        const nuevaLista=[...listaProductosCarrito,nuevoProducto]
        setListaProductosCarrito(nuevaLista)
   }

   const removeProduct = (idProduct)=>{
    const copyArray = [...listaProductosCarrito]
    const newArray = copyArray.filter(e=>e.id !== idProduct)

    setListaProductosCarrito(newArray)
   }

   const clearCart = () =>{
    setListaProductosCarrito([])
   }

   const isInCart=(id)=>{
    const exist=listaProductosCarrito.some(e=>e.id === id)
    console.log(exist)
    return exist
   }

    return(

        <CartContext.Provider value={{listaProductosCarrito,addProduct,removeProduct,clearCart,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}