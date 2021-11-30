import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../services/promise";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getProducts.then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(id)));
        });
    }, [id]);

    return <ItemDetail item = { item } />;
};

export default ItemDetailContainer;