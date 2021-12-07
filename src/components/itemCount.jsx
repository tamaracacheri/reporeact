import { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import { Link } from "react-router-dom";
import { UseCart } from "./CartContext";

const ButtonAddCart = styled (Button) ({
    background: 'rgb(6, 4, 95)',
    color: 'white',
    '&:hover': {
        background: 'rgb(6, 4, 205)',
     },
});

const ItemCount = ({ item, id, stock, initial }) => {
    
    const [count, setCount] = useState(initial);

    const [renderCounter, setRenderCounter] = useState(true);

    const [ quantity, setQuantity ] = useState(1);

    const { addItem, consoleCart, removeItem, clear } = UseCart();
    
    const addItemQuantity = () => {
        const newCount = count + 1;
        if ( newCount <= stock ) {
            setCount(newCount);
        };
    };

    const removeItemQuantity = () => {
        const newCount = count - 1;
        if ( newCount >= initial ) {
            setCount(newCount);
        };
    };

    const onAdd = () => {
        setQuantity(count);
        addItem(item, quantity, count);
        setRenderCounter(false);
    };

    const quitItem = () => {
        removeItem(id);
        setRenderCounter(true);
    };

    const clearCart = () => {
        clear();
    }

    const viewCart = () => {
        consoleCart();
    }

    if ( renderCounter ) {
        return (
                <div className = "card-btn">
                    <div className = "card-count">
                        <Button variant = "text" onClick = { addItemQuantity } >+</Button>
                        <p>{count}</p>
                        <Button variant = "text" onClick = { removeItemQuantity } >-</Button>
                    </div>
                    <ButtonAddCart variant = "contained" onClick = { onAdd } >Add to cart</ButtonAddCart>
                    <Button variant = "contained" onClick = { quitItem }>Remove item</Button>
                    <Button variant = "contained" onClick = { clearCart }>Clear cart</Button>
                    <Link className = "card-btn-back" to = "/">
                        <Button variant = "contained">Back to home</Button>
                    </Link>
                    <Button onClick = { viewCart } >Console log cart</Button>
                </div>
        );
    } else {
        return (
                <div className = "card-btn-finish">
                    <Button variant="contained">
                        <Link to={`/cart`}>
                            Finish order
                        </Link>
                    </Button>
                    <Button variant = "contained" onClick = { quitItem }>Remove item</Button>
                    <Link to = "/">
                        <Button variant = "contained">Back to home</Button>
                    </Link>
                    <Button onClick = { viewCart } >Console log cart</Button>
                </div>
                );
    };
};

export default ItemCount;