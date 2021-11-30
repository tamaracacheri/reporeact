import ItemCount from './itemCount';

const ItemDetail = (props) => {

    const { title, price, stock, pictureUrl } = props.item;

    return (
        <div>
            <img src={ pictureUrl } alt={ pictureUrl }></img>
            <p>{ title }</p>
            <p>Price: ${ price }</p>
            <p>Stock: { stock }</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    );
};

export default ItemDetail;