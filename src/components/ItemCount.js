import { useState } from "react";

const ItemCount = ({ stock, initial}) => {
    //Voy a sumar hasta que el numero sea menor o igual que stock
    //voy a restar hasta que el numero sea mayor o igual que el valor inicial

    //Declaro el hook para el contador
    const [count, setCount] = useState(initial);

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
        const message = `Agregaste ${count} producto`;
        //utilizo un condicional ternario
        (count === 1) ? alert(message) : alert(`${message}s`);
    };

    return (
        <>
            <h1>Agregar Productos</h1>
            <div>
                <button onClick={addItem}>+</button>
                <h3>{count}</h3>
                <button onClick={quitItem}>-</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount;