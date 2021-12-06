import { useEffect, useState } from 'react';
import getProducts from '../services/promise';
import ItemList from './ItemList';

const Home = ({ title }) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts
        .then(res => {
            setProducts(res.filter((prod) => prod.offer === true))
        })
        .catch(err => alert("Error"))
    }, []);

    return ( 
        <>
            <div className = "index-banner">
                <div className = "index-banner-container">
                    <img className = "index-banner-img" src = "https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "banner"></img>
                </div>
                <h1 className = "index-title">{ title }</h1>
                <h2 className = "index-subtitle">Spend less. Live much better</h2>
                </div>
            <div className="item-container">
                <ItemList products = { products } />
            </div>
        </>
    );
};

export default Home;