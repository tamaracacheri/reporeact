import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./itemList";
import Footer from "./Footer";

const Home = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    let q = query(itemsCollection, where("offer", "==", true));
    getDocs(q).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="index-container">
      <div className="index-title-container">
      <h1 className="index-title">PA'CAGADA</h1>
      <h2 className="index-subtitle">BEBIDAS</h2>
      </div>
      <h3 className="index-item-title">Productos destacados</h3>
      <div className="item-container">
        <ItemList products={products} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
