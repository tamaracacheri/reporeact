import { useState } from "react";
import Button from '@mui/material/Button';

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
                    <Button variant="outlined" onClick={addItem}>+</Button>
                    <p>{count}</p>
                    <Button variant="outlined" onClick={quitItem}>-</Button>
                </div>
                <Button variant="contained" onClick={onAdd}>Agregar al carrito</Button>
            </div>
        </>
    )
};

export default ItemCount;