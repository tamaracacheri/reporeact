import { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, setQuantity }) => {
    //Voy a sumar hasta que el numero sea menor o igual que stock
    //voy a restar hasta que el numero sea mayor o igual que el valor inicial

    //Declaro el hook para el contador
    const [count, setCount] = useState(initial);

    const [rendCounter, setRendCounter] = useState(true);

    const addItem = () => {
        const newValue = count +1
        if(newValue <= stock){
            setCount(newValue);
        }
    };

    const quitItem = () =>{
        const newValue = count - 1
        if (newValue >= initial){
            setCount(newValue);
        }
    };
    
    const onAdd = () =>{
        setQuantity(count);
        setRendCounter(false);
    };

    if (rendCounter) {
    return (
        <div className = "card-btn">
            <div className = "card-count">
                <Button variant = "text" onClick = { addItem } >+</Button>
                <p>{count}</p>
                <Button variant = "text" onClick = { quitItem } >-</Button>
            </div>
            <Button variant = "contained" onClick = { onAdd } >Add to cart</Button>
            <Link className = "card-btn-back" to = "/">
                <Button variant = "contained">Back</Button>
            </Link>
        </div>
    );
} else {
    return (<></>);
};
};

export default ItemCount;