import { Fade } from "@mui/material";
import ItemCount from "./ItemCount";

const ItemDetail = (item) => {
  const { id, title, price, stock, img, description } = item.item;
  return (
    <>
      <Fade in={true}>
        <div className="detail-card-item">
          <img className="detail-card-img" src={img} alt={img}></img>
          <p className="detail-card-title">{title}</p>
          <p className="detail-card-description">{description}</p>
          <p className="detail-card-stock">Stock: {stock}</p>
          <p className="detail-card-price">$ {price}</p>
          <ItemCount item={item} id={id} stock={stock} initial={1} />
        </div>
      </Fade>
    </>
  );
};

export default ItemDetail;
