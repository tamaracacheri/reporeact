import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext";

const CartWidget = () => {
  const { itemsSumatoryInCart } = UseCart();

  if (itemsSumatoryInCart() > 0) {
    return (
      <Link to="/cart">
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ ml: 2 }}
          onClick={itemsSumatoryInCart}
        >
          <Badge
            badgeContent={itemsSumatoryInCart()}
            color="error"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    );
  } else {
    return null;
  }
};

export default CartWidget;
