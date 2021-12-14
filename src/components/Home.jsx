import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";

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
    <>
        <img
          className="index-banner-mobile"
          src="https://images.samsung.com/is/image/samsung/assets/uk/cashback-offer/mobile_kv_V6-1.jpg?$FB_TYPE_A_MO_JPG$"
          alt="banner"
        ></img>
        <p className="index-banner-title">Gifts that give back</p>
        <p className="index-banner-body">Claim cashback with every selected item you buy. With many products to mix and match you can claim an extra £50 cashback each time.</p>
        <img
          className="index-banner-desktop"
          src="https://uidesign.gbtcdn.com/GB/image/2019/20190929_13044/banner.jpg?imbypass=true"
          alt="banner"
        ></img>
      <img
        className="index-banner-iphone-mobile"
        src="https://www.singtel.com/content/dam/singtel/personal/products-services/mobile/info/iphone12/products/iphone12pro/iphone12pro-mobile-02.jpg"
        alt="Iphone"
      ></img>
      <img
        className="index-banner-iphone-desktop"
        src="https://cdn.krcs.co.uk/media/wysiwyg/iphone-12-pro/iPhone12_Pro_02.jpg"
        alt="Iphone"
      ></img>
      <div className="index-banner-samsung-container">
        <img
          className="index-banner-samsung"
          src="https://images.samsung.com/uk/smartphones/galaxy-s21-ultra-5g/images/galaxy-s21-ultra-5g_highlights_kv_m.jpg"
          alt="Samsung"
        />
        <p className="index-banner-samsung-title">Galaxy S21 Ultra 5G</p>
        <a
          href="/item/BH6CmoAmsWBH00qCAm8c"
          className="index-banner-samsung-btn"
        >
          BUY NOW
        </a>
        <p className="index-banner-samsung-footer">Epic. In every way</p>
      </div>
        <h3 className="index-item-title">Featured Products</h3>
      <div className="item-container">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default Home;
