import { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';

const MyButton = styled (Button) ({
    background: 'rgb(6, 4, 95)',
    color: 'white',
    '&:hover': {
        background: 'rgb(6, 4, 205)',
     },
});

const ItemCount = ({stock, initial}) => {
    
    const [count, setCount] = useState(initial);
    
    const addItem = () => {
        const newCount = count + 1;
        if (newCount <= stock) {
            setCount(newCount);
        };
    };

    const quitItem = () => {
        const newCount = count - 1;
        if (newCount >= initial) {
            setCount(newCount);
        };
    };

    const onAdd = () => {
        const message =  `Add ${count} item`;
        (count === 1) ? alert(message) : alert(`${message}s`);
    };

    return (
        <>  
            <div className="card-item">
                <p className="card-title">Producto</p>
                <div className="card-body">
                    <Button variant="text" onClick={addItem}>+</Button>
                    <p>{count}</p>
                    <Button variant="text" onClick={quitItem}>-</Button>
                </div>
                <MyButton variant="contained" onClick={onAdd}>Add to cart</MyButton>
            </div>
        </>
    )
};

export default ItemCount;