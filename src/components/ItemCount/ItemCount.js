
import "./ItemCount.css"
import Button from '@mui/material/Button';
import {useState} from "react"


export const ItemCount = ({stock,title,inicial}) =>{

    const agregarProducto=()=>{
        console.log(`se agrego ${count} ${title} al carrito`)
    }

    const [count,setCount] = useState(inicial)

    const addCount = () =>{
        if(stock>count){
        setCount(count+1)
        }
    }

    const removeCount = () =>{
        if(count>1){
        setCount(count - 1)
       }
    }

    return (
        <>
        <div className="count-item">
            <Button onClick={removeCount}  size="small">-</Button>
            <p>{count}</p>
            <Button onClick={addCount}  size="small">+</Button>
        </div>
            <Button onClick={agregarProducto}>Agregar al carrito</Button>
        </>
    )
}