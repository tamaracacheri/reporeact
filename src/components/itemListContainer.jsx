import CircularProgress from "@mui/material/CircularProgress";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import Footer from "./Footer";

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

  if (products.length > 0) {
    return (
      <div className="category">
        <h2 className="category-subtitle">{categoryTitle}</h2>
        <div className="item-container">
          <ItemList products={products} />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <>
        <div className="circular-progress-container">
          <CircularProgress sx={{ color: "white" }} />
        </div>
      </>
    );
  }
};

export default ItemListContainer;
