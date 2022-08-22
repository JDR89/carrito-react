import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button'


const CartWidget = () =>{
    return(
    <Button className='cart-button' variant="contained">
        <ShoppingCartIcon/>
    </Button>
    )
}

export default CartWidget 