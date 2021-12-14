import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

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

  if (cart.length > 0) {
    return (
      <>
        <Link to="/">
          <Button>Back to homepage</Button>
        </Link>
        {cart.map((value) => {
          const newValue = value.item.item;
          return (
            <div className="card-item" key={newValue.id}>
              <img
                className="card-img"
                src={newValue.img}
                alt={newValue.title}
              ></img>
              <h3>{newValue.title}</h3>
              <p>Quantity: {value.quantity}</p>
              <p>Price: ${newValue.price}</p>
              <Button onClick={() => removeItem(newValue.id)}>
                Remove Item
              </Button>
            </div>
          );
        })}
        <Button onClick={clearCart}>Clear cart</Button>
        <p>Total: $ {totalPrice()}</p>

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
          <Button onClick={handleFormSubmit}>Finish order</Button>
        </FormControl>
      </>
    );
  } else {
    return (
      <>
        <div>
          <p>Nothing here.</p>
          <Link to="/">
            <Button>Back to homepage</Button>
          </Link>
        </div>
        <Collapse in={confirmation}>
          {orderId !== undefined && (
            <Alert
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
              Thank you very much for your purchase! Your order number is:{" "}
              {orderId}. The shipment will arrive in 3-5 days.
            </Alert>
          )}
        </Collapse>
      </>
    );
  }
}
