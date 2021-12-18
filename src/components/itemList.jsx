import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            img={product.img}
            stock={product.stock}
            price={product.price}
            stars={product.stars}
          />
        );
      })}
    </>
  );
};

export default ItemList;
