import { useEffect, useState } from "react";
import ItemCount from './ItemCount';

const ItemDetail = ( item ) => {

    const { title, price, stock, pictureUrl } = item.item;

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        let msg = `You have added ${quantity} item`
        if (quantity !== 0) {
            quantity > 1 ? alert(msg+'s'): alert(msg);
        }
    }, [quantity])
    
    return (
        <>
            <div className = "detail-banner">
                <div className = "detail-banner-container">
                    <img className = "detail-banner-img" src = "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt = "banner">
                    </img>
                </div>
                <h1 className = "detail-title">Great Buy Shop</h1>
                <h2 className = "detail-subtitle">Make the difference</h2>
            </div>
            <div className = "detail-card-item">
                <img className = "detail-card-img" src={ pictureUrl } alt={ pictureUrl }></img>
                <p className = "detail-card-title">{ title }</p>
                <p className = "detail-card-price">Price: ${ price }</p>
                <p className = "detail-card-stock">Stock: { stock }</p>
                <ItemCount 
                    stock = { stock }
                    initial = { 1 }
                    setQuantity = { setQuantity }
                />
            </div>
        </>
    );
};

export default ItemDetail;