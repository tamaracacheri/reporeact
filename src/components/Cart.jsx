import { AlertTitle, Badge } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { UseCart } from "./CartContext";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import lottie from "lottie-web";
import { useRef } from "react";
import { useEffect } from "react";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = UseCart();
  const inputs = [
    {
      label: "name",
      name: "name",
    },
    {
      label: "email",
      name: "email",
    },
    {
      label: "phone",
      name: "phone",
    },
  ];
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const onChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const updateDB = () => {
    const db = getFirestore();
    cart.map((prod) => {
      return updateDoc(doc(db, "items", `${prod.item.item.id}`), {
        stock: prod.item.item.stock - prod.quantity,
      });
    });
  };
  const [confirmation, setConfirmation] = useState(true);
  const [orderId, setOrderId] = useState();
  const db = getFirestore();
  const addOrderToDb = () => {
    let date = new Date();
    const orderCollection = collection(db, "orders");
    const data = {
      buyer: {
        name: formFields.name,
        phone: formFields.phone,
        email: formFields.email,
      },
      date: date,
      items: cart,
      total: totalPrice(),
    };
    addDoc(orderCollection, data).then((data) => {
      setOrderId(data.id);
    });
  };
  const handleFormSubmit = () => {
    addOrderToDb();
    updateDB();
    clearCart();
    setConfirmation(true);
  };
  const taskCalc = (totalPrice) => {
    return totalPrice * 0.06;
  };
  const emptyBox = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: emptyBox.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/sadEmptyBox.json"),
    });
  });
  const emptyBoxSvg = () => {
    return <div className="cart-lottie-svg" ref={emptyBox} />;
  };
  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <div className="cart-title-container">
          <h3>ORDER</h3>
        </div>
        {cart.map((value) => {
          const newValue = value.item.item;
          return (
            <div className="cart-item-container" key={newValue.id}>
              <img
                className="cart-item-img"
                src={newValue.img}
                alt={newValue.title}
              ></img>
              <Badge
                className="cart-item-quantity"
                badgeContent={value.quantity}
                color="error"
                sx={{ position: "absolute" }}
              />
              <h4 className="cart-item-title">{newValue.title}</h4>
              <p className="cart-item-price">US$ {newValue.price}</p>
              <button
                className="cart-item-footer"
                onClick={() => removeItem(newValue.id)}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="cart-item-trash"
                />
              </button>
            </div>
          );
        })}
        <div className="cart-total-container">
          <div>
            <p>Subtotal:</p>
            <p>Task (6%):</p>
            <p>Shipping:</p>
            <p className="cart-total-price">Total:</p>
          </div>
          <div className="cart-total-values">
            <p>{totalPrice()} US$</p>
            <p>{taskCalc(totalPrice())}</p>
            <p>20 US$</p>
            <p className="cart-total-price">
              {totalPrice() + taskCalc(totalPrice()) + 20} US$
            </p>
          </div>
        </div>
        <p className="cart-clearCart" onClick={clearCart}>
          CLEAR CART
        </p>
        <FormControl>
          {inputs.map(({ name, label }) => (
            <TextField
              id="outlined-textarea"
              key={name}
              label={label}
              value={formFields[name]}
              name={name}
              onChange={onChange}
            />
          ))}
          <p className="cart-finishOrder" onClick={handleFormSubmit}>
            Finish order
          </p>
        </FormControl>
      </div>
    );
  } else {
    return (
      <>
        <div className="cart-empty">
          <div className="cart-lottie-container">{emptyBoxSvg()}</div>
          <p className="cart-empty-title">Oops... Your cart is empty</p>
          <p className="cart-empty-body">
            Looks like you haven't added anything to your cart yet
          </p>
        </div>
        <Collapse in={confirmation}>
          {orderId !== undefined && (
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setConfirmation(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>Purchase successfully!</AlertTitle>
              Thank you very much for your purchase! Your order number is:{" "}
              {orderId}. The shipment will arrive in 3-5 days.
            </Alert>
          )}
        </Collapse>
      </>
    );
  }
}
