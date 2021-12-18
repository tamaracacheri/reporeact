import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grow, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext";
import { styled } from "@mui/styles";

const IconCartWidget = styled(IconButton)({
  color: "#2183a2",
});

const CartWidget = () => {
  const { itemsSumatoryInCart } = UseCart();

  if (itemsSumatoryInCart() > 0) {
    return (
      <Grow in={true}>
        <Link to="/cart">
          <IconCartWidget
            size="large"
            edge="start"
            aria-label="menu"
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
          </IconCartWidget>
        </Link>
      </Grow>
    );
  } else {
    return null;
  }
};

export default CartWidget;
