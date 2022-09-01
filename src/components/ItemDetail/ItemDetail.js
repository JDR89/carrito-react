
const ItemDetail =({data})=>{

    return(
        <div>
           <p>{data.title}</p> 
           <p>{data.price}</p>
           <img alt="imagen" src={`./imagenes/${data.image}`}/>
        </div>
    )
}

export default ItemDetail