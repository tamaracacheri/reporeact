import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/styles";
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext";

const ButtonAddCart = styled(Button)({
  background: "rgb(94, 0, 138)",
  color: "white",
  "&:hover": {
    background: "rgb(94, 0, 178)",
  },
  borderRadius: "10px",
});

const ItemCount = ({ item, id, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const [renderCounter, setRenderCounter] = useState(true);

  const [quantity, setQuantity] = useState(initial);

  const { addItem, removeItem } = UseCart();

  const addItemQuantity = () => {
    let newCount = count + 1;
    if (newCount <= stock) {
      setCount(newCount);
      setQuantity(newCount);
    }
  };

  const removeItemQuantity = () => {
    let newCount = count - 1;
    if (newCount >= initial) {
      setCount(newCount);
      setQuantity(newCount);
    }
  };

  const onAdd = () => {
    addItem(item, quantity);
    setRenderCounter(false);
  };

  const quitItem = () => {
    removeItem(id);
    setRenderCounter(true);
  };

  if (renderCounter) {
    return (
      <div className="card-btn-container">
        <div className="card-count">
          <Button
            sx={{ color: "white" }}
            variant="text"
            onClick={addItemQuantity}
          >
            +
          </Button>
          <p>{count}</p>
          <Button
            sx={{ color: "white" }}
            variant="text"
            onClick={removeItemQuantity}
          >
            -
          </Button>
        </div>
        <ButtonAddCart variant="contained" onClick={onAdd}>
          Agregar al carrito
        </ButtonAddCart>
        <Link className="card-btn-back" to="/">
          <Button sx={{ borderRadius: "10px" }} variant="contained">
            Volver
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card-btn-container">
        <ButtonAddCart variant="contained">
          <Link className="card-btn-finish" to={`/cart`}>
            Terminar compra
          </Link>
        </ButtonAddCart>
        <Button
          sx={{ borderRadius: "10px" }}
          variant="contained"
          color="error"
          onClick={quitItem}
        >
          Quitar item
        </Button>
        <Link to="/">
          <Button sx={{ borderRadius: "10px" }} variant="contained">
            Volver
          </Button>
        </Link>
      </div>
    );
  }
};

export default ItemCount;
