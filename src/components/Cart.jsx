import { AlertTitle } from "@mui/material";
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
import lottie from "lottie-web";
import { useRef } from "react";
import { useEffect } from "react";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = UseCart();
  const inputs = [
    {
      label: "Nombre",
      name: "name",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Teléfono",
      name: "phone",
    },
    {
      label: "Dirección",
      name: "adress",
    },
  ];
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
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
        adress: formFields.adress,
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
    setExistsPurchase(true);
  };
  const taskCalc = (totalPrice) => {
    return parseInt(totalPrice * 0.21).toFixed(2);
  };
  const totalCalc = (totalPrice) => {
    return parseInt(totalPrice() + parseInt(taskCalc(totalPrice())) + 100).toFixed(2);
  };
  const emptyBox = useRef(null);
  useEffect(() => {
    lottie.loadAnimation(
      {
        container: emptyBox.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../assets/sadEmptyBox.json"),
      },
      []
    );
  });
  const [existsPurchase, setExistsPurchase] = useState(false);
  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <div className="cart-container-1">
        <div className="cart-title-container">
          <h3>Orden</h3>
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
              <h4 className="cart-item-title">{newValue.title}</h4>
              <p>Cantidad: {value.quantity}</p>
              <p className="cart-item-price">$ {newValue.price}</p>
              <button
                className="cart-item-footer"
                onClick={() => removeItem(newValue.id)}
              >
                Quitar item
              </button>
            </div>
          );
        })}
        <div className="cart-total-container">
          <div className="cart-container-2">
            <p>Subtotal:</p>
            <p>Impuestos (21%):</p>
            <p>Envío:</p>
            <p className="cart-total-price">Total:</p>
          </div>
          <div className="cart-total-values">
            <p>$ {totalPrice()}</p>
            <p>$ {taskCalc(totalPrice())}</p>
            <p>$ 100</p>
            <p className="cart-total-price">$ {totalCalc(totalPrice)}</p>
          </div>
        </div>
        <p className="cart-clearCart" onClick={clearCart}>
          Vaciar carrito
        </p>
        </div>
        <div>
        <FormControl sx={{ width: "100%", alignItems: "center" }}>
          <div className="cart-title-container">
            <h3>Información de envío</h3>
          </div>
          {inputs.map(({ name, label }) => (
            <TextField
              id="outlined-textarea"
              key={name}
              label={label}
              value={formFields[name]}
              name={name}
              onChange={onChange}
              sx={{ mb: 2, backgroundColor: "white", borderRadius: "10px" }}
            />
          ))}
          <p className="cart-finishOrder" onClick={handleFormSubmit}>
            Comprar
          </p>
        </FormControl>
        </div>
      </div>
    );
  } else {
    if (existsPurchase === true) {
      return (
        <div className="cart-empty">
          <Collapse in={confirmation}>
            {orderId !== undefined && (
              <div className="cart-check">
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
                  <AlertTitle>Compra realizada con éxito</AlertTitle>
                  Muchas gracias por tu compra. Tu número de orden es: {orderId}
                  .
                </Alert>
              </div>
            )}
          </Collapse>
        </div>
      );
    } else if (existsPurchase === false) {
      return (
        <div className="cart-empty">
          <p className="cart-empty-title">Carrito vacío</p>
          <p className="cart-empty-body">
            Aún no has agregado items al carrito.
          </p>
        </div>
      );
    }
  }
}
