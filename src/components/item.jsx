import { Link } from "react-router-dom";

const Item = ({ id, description, price, stock, title, img }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className="card-item">
        <img className="card-img" src={img} alt={img} />
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
        <p className="card-price">$ {price}</p>
        <p className="card-footer">Buy now</p>
      </div>
    </Link>
  );
};

export default Item;
