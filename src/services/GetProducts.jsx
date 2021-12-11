import { getFirestore, collection, getDocs } from "firebase/firestore";

const GetProductsFirestore = () => {
  let products = [];
  const db = getFirestore();
  const itemsCollection = collection(db, "items");

  getDocs(itemsCollection).then((snapshot) => {
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  return products;
};

export default GetProductsFirestore;
