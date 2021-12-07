import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext"

export default function Cart() {
    
    const { cart, removeItem } = UseCart();
    
    if(cart.length > 0) {
        return (
            cart.map((value) => {
                return (
                    <div className = "card-item" key = { value.item.item.id } >
                        <img className = "card-img" src = { value.item.item.pictureUrl } alt = { value.item.item.title } ></img>
                        <h3>{ value.item.item.title }</h3>
                        <p>Quantity: { value.quantity }</p>
                        <p>Price: ${ value.item.item.price }</p>
                        <Button onClick = { () => removeItem(value.item.item.id) } >Remove Item</Button>
                    </div>
                );
            })
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