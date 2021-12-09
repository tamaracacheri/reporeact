import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import getProducts from "../services/promise";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { id } = useParams();

    /*
        get items local Json
    */

    /*  useEffect(() => {
        getProducts.then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(id)));
        });
    }, [id]); */

    useEffect(() => {

        const db = getFirestore();
        
        const docRef = doc(db, "items", id);

        getDoc(docRef).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() })
        })

    }, [ id ]);

    return <ItemDetail item = { item } />;
};

export default ItemDetailContainer;