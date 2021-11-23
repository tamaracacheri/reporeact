import Item from "./item";

const ItemList = ({products}) => {
    return (
        <>
            {products.map(product => {
                return(
                    <Item
                    key = {product.id}
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