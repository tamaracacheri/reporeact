import { Link } from "react-router-dom";
import { Grow } from "@mui/material";

const Item = ({ id, description, price, title, img }) => {
  return (
    <>
      <Link to={`/item/${id}`}>
        <Grow in={true}>
          <div className="card-item">
          <img className="card-img" src={img} alt={img} />
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
            <p className="card-price">US$ {price}</p>
          </div>
          </div>
        </Grow>
      </Link>
    </>
  );
};

export default Item;
