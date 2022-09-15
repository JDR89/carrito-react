import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Badge from '@mui/material/Badge';

const CartWidget = () => {
   
  const{getTotalSeleccionados}=useContext(CartContext)

  return (
    <Link to={"/cart"}>
      <Button className="cart-button" variant="contained">
        <Badge badgeContent={getTotalSeleccionados()} color="success">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </Link>
  );
};

export default CartWidget;
