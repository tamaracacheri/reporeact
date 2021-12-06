import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import getProducts from '../services/promise';
import ItemList from './ItemList';

const ItemListContainer = ({ title }) => {
    
    const [products, setProducts] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        getProducts
        .then(res => {
            setProducts(res.filter((prod) => prod.category === category))
        })
        .catch(err => alert("Error"))
    }, [ category ]);

    let categoryTitle = category;

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    categoryTitle = capitalize(categoryTitle);

    if(categoryTitle === "Videogamesaccesories") {
        categoryTitle = "Video games accesories";
    } else if (categoryTitle === "Computercomponents") {
        categoryTitle = "Computer components";
    } else if (categoryTitle === "Officeelectronics") {
        categoryTitle = "Office electronics";
    } else if (categoryTitle === "Tvvideo") {
        categoryTitle = "Tv & video";
    } else if (categoryTitle === "Homeaudio") {
        categoryTitle = "Home audio";
    };

    return ( 
        <div className = "category">
            <div className = "category-banner">
                <div className = "category-banner-container">
                    <img className = "category-banner-img" src = "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "banner"></img>
                </div>
                <h1 className="category-title">{ title }</h1>
                <h2 className = "category-subtitle">{ categoryTitle }</h2>
            </div>
            <div className="item-container">
                <ItemList products = { products } />
            </div>
        </div>
    );

};
 
export default ItemListContainer;