import ItemCount from './itemCount';

const Item = ({description, price, stock, title, pictureUrl}) => {

    return(
        <div className="card-item">
            <img className="card-img" src={pictureUrl} alt={pictureUrl}/>
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p>Stock: {stock}</p>
                <p>{description}</p>
                <p className="card-price">Price: $ {price}</p>
            </div>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Item