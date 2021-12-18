import { Grow, Rating } from "@mui/material";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const ItemDetail = (item) => {
  const { id, title, price, stock, img, description, stars } = item.item;
  const RatingStars = () => {
    const updateDB = (newValue) => {
      const db = getFirestore();
      return updateDoc(doc(db, "items", id), {
        stars: Math.ceil((stars + newValue) / 2),
      });
    };
    const [value, setValue] = useState(stars);
    return (
      <>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue(newValue);
              updateDB(newValue);
            }
          }}
        />
      </>
    );
  };
  return (
    <>
      <div className="detail-background"></div>
      <Grow in={true}>
        <div className="detail-card-item">
          <img className="detail-card-img" src={img} alt={img}></img>
          <p className="detail-card-title">{title}</p>
          <p className="detail-card-description">{description}</p>
          <p className="detail-card-stock">Stock: {stock}</p>
          <p className="detail-card-price">US$ {price}</p>
          <RatingStars />
          <ItemCount item={item} id={id} stock={stock} initial={1} />
        </div>
      </Grow>
    </>
  );
};

export default ItemDetail;
