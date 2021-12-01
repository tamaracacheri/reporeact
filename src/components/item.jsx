import { Link } from 'react-router-dom';

const Item = ({description, price, stock, title, pictureUrl, id}) => {

    return(
        <Link to = {`/item/${id}`}>
            <div className="card-item">
                <img className="card-img" src={pictureUrl} alt={pictureUrl}/>
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p>Stock: {stock}</p>
                    <p>{description}</p>
                    <p className="card-price">Price: $ {price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;