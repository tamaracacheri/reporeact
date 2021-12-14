import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (category === undefined) {
      getDocs(itemsCollection).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } else {
      let q = query(itemsCollection, where("category", "==", category));
      getDocs(q).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [category]);

  let categoryTitle = category;

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  categoryTitle = capitalize(categoryTitle);

  if (categoryTitle === "Videogamesaccesories") {
    categoryTitle = "Video games accesories";
  } else if (categoryTitle === "Computercomponents") {
    categoryTitle = "Computer components";
  } else if (categoryTitle === "Officeelectronics") {
    categoryTitle = "Office electronics";
  } else if (categoryTitle === "Tvvideo") {
    categoryTitle = "Tv & video";
  } else if (categoryTitle === "Homeaudio") {
    categoryTitle = "Home audio";
  }

  return (
    <div className="category">
      <img
        className="category-banner-mobile"
        src="https://cdn.shopify.com/s/files/1/2459/1583/articles/blog_orient_sale.png?v=1606458948)"
        alt="banner"
      ></img>
      <img
        className="category-banner-desktop"
        src="https://cdn.shopify.com/s/files/1/2459/1583/articles/season_end_sale.jpg?v=1597754442)"
        alt="banner"
      ></img>

      <h1 className="category-title">{title}</h1>
      <h2 className="category-subtitle">{categoryTitle}</h2>

      <div className="item-container">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
