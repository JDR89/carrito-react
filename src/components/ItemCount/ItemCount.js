
import "./ItemCount.css"
import Button from '@mui/material/Button';
import {useState} from "react"


export const ItemCount = ({stock,onAdd}) =>{

    

    const [count,setCount] = useState(0)

    const addCount = () =>{
        
        setCount(count+1)
        
    }

    const removeCount = () =>{
        
        setCount(count - 1)
       
    }

    return (
        <>

        <div className="count-item">
            <Button onClick={removeCount} disabled={count===0} size="small">-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled={count===stock}  size="small">+</Button>
            <Button onClick={()=>onAdd(count)} disabled={count===0}>Agregar al carrito</Button>
        </div>

        </>
    )
}