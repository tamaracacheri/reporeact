import { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';

const ButtonAddCart = styled (Button) ({
    background: 'rgb(6, 4, 95)',
    color: 'white',
    '&:hover': {
        background: 'rgb(6, 4, 205)',
     },
});

const ItemCount = ({ stock, initial, setQuantity }) => {
    
    const [count, setCount] = useState(initial);

    const [rendCounter, setRendCounter] = useState(true);
    
    const addItem = () => {
        const newCount = count + 1;
        if (newCount <= stock) {
            setCount(newCount);
        };
    };

    const removeItem = () => {
        const newCount = count - 1;
        if (newCount >= initial) {
            setCount(newCount);
        };
    };

    const onAdd = () => {
        setQuantity(count);
        setRendCounter(false);
    };

    if (rendCounter) {
        return (
                <div className = "card-btn">
                    <div className = "card-count">
                        <Button variant = "text" onClick = { addItem }>+</Button>
                        <p>{count}</p>
                        <Button variant = "text" onClick = { removeItem }>-</Button>
                    </div>
                    <ButtonAddCart variant = "contained" onClick = { onAdd }>Add to cart</ButtonAddCart>
                </div>
        );
    } else {
        return (<></>);
  }
};

export default ItemCount;