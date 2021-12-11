import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/styles";
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext";

const ButtonAddCart = styled(Button)({
  background: "rgb(6, 4, 95)",
  color: "white",
  "&:hover": {
    background: "rgb(6, 4, 205)",
  },
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
          <Button variant="text" onClick={addItemQuantity}>
            +
          </Button>
          <p>{count}</p>
          <Button variant="text" onClick={removeItemQuantity}>
            -
          </Button>
        </div>
        <ButtonAddCart variant="contained" onClick={onAdd}>
          Add to cart
        </ButtonAddCart>
        <Button variant="contained" onClick={quitItem}>
          Remove item
        </Button>
        <Link className="card-btn-back" to="/">
          <Button variant="contained">Continue buying</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card-btn-container">
        <Button variant="contained">
          <Link className="card-btn-finish" to={`/cart`}>
            Finish order
          </Link>
        </Button>
        <Button variant="contained" onClick={quitItem}>
          Remove item
        </Button>
        <Link to="/">
          <Button variant="contained">Continue buying</Button>
        </Link>
      </div>
    );
  }
};

export default ItemCount;
