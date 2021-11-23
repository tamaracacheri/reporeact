import { useEffect, useState } from 'react';
import getProducts from '../services/promise';
import ItemList from './itemList';

const ItemListContainer = ({ title }) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts
        .then(res => {
            setProducts(res)
        })
        .catch(err => alert("Error"))
    }, []);

    return ( 
        <>
            <h1 className="category-title">{title}</h1>
            <div className="item-container">
                <ItemList products={products} />
            </div>
        </>
    );

};
 
export default ItemListContainer;