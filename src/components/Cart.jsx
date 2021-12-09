import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext"

export default function Cart() {
    
    const { cart, removeItem, clearCart, totalPrice } = UseCart();
    
    if(cart.length > 0) {
        return (
            <>
                <Link to = "/">
                    <Button>
                        Back to homepage
                    </Button>
                </Link>
                {cart.map((value) => {
                    const newValue = value.item.item;
                    return (
                        <div className = "card-item" key = { newValue.id } >
                            <img className = "card-img" src = { newValue.img } alt = { newValue.title } ></img>
                            <h3>{ newValue.title }</h3>
                            <p>Quantity: { value.quantity }</p>
                            <p>Price: ${ newValue.price }</p>
                            <Button onClick = { () => removeItem(newValue.id) } >Remove Item</Button>
                        </div>
                    );
                })}
                <Button onClick = { clearCart } >Clear cart</Button>
                <p>Total: $ { totalPrice() }</p>
            </>
        );
    } else {
        return (
            <div>
                <Link to = "/">
                    <Button>
                        Back to homepage
                    </Button>
                </Link>
                <p>Carrito vacio</p>
            </div>
        );
    };
};