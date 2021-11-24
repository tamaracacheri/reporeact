import { Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemList from './itemList';
import getProducts from './services/handMadePromise';

const ItemListContainer = ({ title }) => {
    
    const [products, setProducts] = useState([]);
    console.log('Los productos en el hook', products)
    
    useEffect(() => {
        getProducts
        .then(res => {
            setProducts(res)
        })
        .catch(err => alert("Error"))
    }, []);

    return ( 
        <Container maxWidth="xl">
            <Box sx={{
                    flexGrow: 1,
                    mx: 'auto',
                    marginTop: 5,
                    textAlign: 'center'
                }}
            >
                <h1>{title}</h1>
                <ItemList products={products} />
            </Box>
        </Container>
    );
}

export default ItemListContainer;
 