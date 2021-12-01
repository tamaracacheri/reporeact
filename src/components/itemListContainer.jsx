import { useEffect, useState } from 'react';
import ItemList from './itemList';
import getProducts from './services/handMadePromise';

const ItemListContainer = ({ title }) => {
    
    const [products, setProducts] = useState([]);
    console.log('Los productos en el hook', products)
    
    useEffect(() => {
        getProducts
        .then(res => {
            setProducts(res)
        })
        .catch(err => alert("Error"))
    }, []);

    return ( 
        <>
            <h1>{title}</h1>
            <div className="item-container">
                <ItemList products = { products } />
            </div>
        </>
    );
}

export default ItemListContainer;
 