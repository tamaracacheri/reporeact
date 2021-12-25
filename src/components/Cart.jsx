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
      label: "Name",
      name: "name",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Phone",
      name: "phone",
    },
    {
      label: "Adress",
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
    return (totalPrice * 0.06).toFixed(2);
  };
  const totalCalc = (totalPrice) => {
    return parseInt(totalPrice() + taskCalc(totalPrice()) + 20).toFixed(2);
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
  const emptyBoxSvg = () => {
    return <div className="cart-lottie-emptyBox" ref={emptyBox} />;
  };
  const checkOkey = useRef(null);
  useEffect(() => {
    lottie.loadAnimation(
      {
        container: checkOkey.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../assets/checkOkeyDone.json"),
      },
      []
    );
  });
  const checkOkeySvg = () => {
    return <div className="cart-lottie-check" ref={checkOkey} />;
  };
  const [existsPurchase, setExistsPurchase] = useState(false);
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
            <p className="cart-total-price">{totalCalc(totalPrice)} US$</p>
          </div>
        </div>
        <p className="cart-clearCart" onClick={clearCart}>
          CLEAR CART
        </p>
        <FormControl sx={{width: "100%"}}>
          <div className="cart-title-container">
            <h3>SHIPPING INFORMATION</h3>
          </div>
          {inputs.map(({ name, label }) => (
            <TextField
              id="outlined-textarea"
              key={name}
              label={label}
              value={formFields[name]}
              name={name}
              onChange={onChange}
              sx={{mb: 2}}
            />
          ))}
          <p className="cart-finishOrder" onClick={handleFormSubmit}>
            FINISH ORDER
          </p>
        </FormControl>
      </div>
    );
  } else {
    if (existsPurchase === true) {
      return (
        <>
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
                  <AlertTitle>Purchase successfully!</AlertTitle>
                  Thank you very much for your purchase! Your order number is:{" "}
                  {orderId}. The shipment will arrive in 3-5 days.
                </Alert>
                <div className="cart-lottie-containerCheck">
                  {checkOkeySvg()}
                </div>
              </div>
            )}
          </Collapse>
        </>
      );
    } else if (existsPurchase === false) {
      return (
        <div className="cart-empty">
          <div className="cart-lottie-container">{emptyBoxSvg()}</div>
          <p className="cart-empty-title">Oops... Your cart is empty</p>
          <p className="cart-empty-body">
            Looks like you haven't added anything to your cart yet
          </p>
        </div>
      );
    }
  }
}
