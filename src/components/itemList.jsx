import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <>
            {products.map(product => {
                return(
                    <Item
                    key = {product.id}
                    id = {product.id}
                    description = {product.description}
                    pictureUrl = {product.pictureUrl}
                    price = {product.price}
                    stock = {product.stock}
                    title = {product.title}
                    />
                )
            })}
        </>
    )
};

export default ItemList