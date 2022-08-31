
const ItemDetail =({data})=>{

    return(
        <div>
           <p>{data.title}</p> 
           <p>{data.price}</p>
        </div>
    )
}

export default ItemDetail