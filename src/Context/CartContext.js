import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
   const [listaProductosCarrito,setListaProductosCarrito] = useState([])
   


   const addProduct =(producto,count)=>{
        const newList = [...listaProductosCarrito]

        if(isInCart(producto.id)){
            const productIndex = listaProductosCarrito.findIndex(e=>e.id===producto.id)
            newList[productIndex].cantidad = newList[productIndex].cantidad+count
            newList[productIndex].precioTotal=newList[productIndex].cantidad*newList[productIndex].price
            setListaProductosCarrito(newList)
        }else{
             const nuevoProducto={...producto,cantidad:count,precioTotal:count*producto.price}
             const nuevaLista=[...listaProductosCarrito,nuevoProducto]
             setListaProductosCarrito(nuevaLista)
        }

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


   const getTotalSeleccionados =()=>{
        const totalSeleccionados = listaProductosCarrito.reduce((acc,data)=>acc + data.cantidad,0)
        return totalSeleccionados
   }



    return(

        <CartContext.Provider value={{listaProductosCarrito,addProduct,removeProduct,clearCart,isInCart,getTotalSeleccionados}}>
            {children}
        </CartContext.Provider>
    )
}