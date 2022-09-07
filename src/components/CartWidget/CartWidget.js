import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={"/cart"}>
      <Button className="cart-button" variant="contained">
        <ShoppingCartIcon />
      </Button>
    </Link>
  );
};

export default CartWidget;
