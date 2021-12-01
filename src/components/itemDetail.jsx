import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {

    const { title, price, stock, pictureUrl } = props.item;

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        let msg = `You have added ${quantity} item`
        if (quantity !== 0) {
            quantity > 1 ? alert(msg+'s'): alert(msg); 
        }
    },[quantity])

    return (
        <div className = "item-detail-container">
            <img className = "item-detail-img" src={ pictureUrl } alt={ pictureUrl }></img>
            <p>{ title }</p>
            <p>Price: ${ price }</p>
            <p>Stock: { stock }</p>
            <ItemCount stock={stock} initial={1} setQuantity = { setQuantity } />
        </div>
    );
};

export default ItemDetail;