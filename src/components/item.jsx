import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Grow } from "@mui/material";

const Item = ({ id, description, price, title, img, stars }) => {
  return (
    <>
      <Link to={`/item/${id}`}>
        <Grow in={true}>
          <div className="card-item">
            <img className="card-img" src={img} alt={img} />
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
            <Rating name="read-only" value={stars} readOnly />
            <p className="card-price">US$ {price}</p>
            <p className="card-footer">Buy now</p>
          </div>
        </Grow>
      </Link>
    </>
  );
};

export default Item;
